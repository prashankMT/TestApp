import { useMemo } from "react";
import useQuery from "./useQuery";
import { combinedQuery } from "../query";
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
    total,
    start: cursor,
    hasMore: hasMore,
    data: [] //data.map(itemParser)
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
  const [{ data, loading, loaded, hasError, error }, fetchmore] = useQuery(
    combinedQuery,
    variables
  );

  // const [_, fetchmore] = useQuery(listQuery, variables, false); //eslint-disable-line

  let list = {};
  let aggregations = {};

  if (loaded) {
    const rawList = data.user.user.listCandidates;
    const rawAggregations = data.user.user.accreditationAgrregate;

    list = listParser(rawList);
    aggregations = aggregationParser(rawAggregations);
  }

  const loadmore = useCallback(() => {
    return fetchmore(list.start, 10);
  }, [list.start]);

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
