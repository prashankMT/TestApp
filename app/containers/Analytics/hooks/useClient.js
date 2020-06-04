import { useMemo } from "react";
import { GraphQLClient } from "graphql-request";

const useClient = () => {
  const endpoint = `${process.env.GOVERNANCE_GQL_URL}/graphql`;

  const graphQLClient = useMemo(() => {
    return new GraphQLClient(endpoint, {
      headers: {
        "x-token": "c0UGYM_huwfNxzHpbXiqI4seCpxf_p6z"
      }
    });
  });
  return [graphQLClient];
};

export default useClient;
