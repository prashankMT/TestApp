/*eslint-disable*/
import { useMemo } from "react";
import useQuery from "./useQuery";
import useClient from "./useQuery";
import { combinedQuery, listQuery } from "../query";
import { useCallback } from "react";

const itemParser = item => {
  const {
    totalModules,
    completedModules
  } = item.moduleActivityAggregation.reduce(
    (result, { moduleState, count }) => {
      if (moduleState == "COMPLETED") {
        result.completedModules += count;
      }
      result.totalModules += count;
      return result;
    },
    { totalModules: 0, completedModules: 0 }
  );
  return {
    id: item.accreditation.id,
    totalModules,
    name: item.accreditation.name,
    completedModules,
    dueDate: item.dueDate,
    status: item.evaluationState,
    dueDateEnabled: item.accreditation.dueDate.enabled
  };
};

const listParser = ({ cursor, total, hasMore, data }) => {
  return {
    start: cursor,
    total,
    hasMore,
    data: data.map(itemParser)
  };
};

const aggregationParser = aggregations => {
  return aggregations.reduce(
    (result, { candidateEvaluationState, count }) => {
      switch (candidateEvaluationState) {
        case "ACCREDITED":
          result.accreditedCount += count;
          break;
        case "PENDING":
          result.pendingCount += count;
          break;
        case "UNSUCCESSFUL":
          result.unsuccessfulCount += count;
          break;
      }
      return result;
    },
    { pendingCount: 0, accreditedCount: 0, unsuccessfulCount: 0 }
  );
};

const getVariables = (userId, from) => {
  return {
    userId,
    pagination: {
      from,
      size: 10
    }
  };
};

const useGraphqlData = userId => {
  const variables = useMemo(() => getVariables(userId), [userId]);
  const { data, loading, loaded, hasError, error } = useQuery(
    combinedQuery,
    variables
  );

  let start = 0;
  let list = {};
  let aggregations = {};

  if (loaded) {
    const rawList = data.user.user.listCandidates;
    const rawAggregations = data.user.user.accreditationAgrregate;

    start = list.start;

    list = listParser(rawList);
    aggregations = aggregationParser(rawAggregations);
  }

  const loadmore = useCallback(async () => {
    const [client] = useClient();
    const variables = getVariables(userId, start);
    const data = await client.request(listQuery, variables);
    return listParser(data);
  }, [start, userId]);

  return {
    list,
    error,
    loaded,
    loading,
    loadmore,
    hasError,
    aggregations,
    lastUpdatedAt: Math.ceil(Date.now() / 1000)
  };
};

export default useGraphqlData;
