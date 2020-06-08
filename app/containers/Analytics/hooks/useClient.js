import { useMemo } from "react";
import { GraphQLClient } from "graphql-request";

const useClient = () => {
  const endpoint = `${process.env.GOVERNANCE_GQL_URL}/graphql`;

  const graphQLClient = useMemo(() => {
    return new GraphQLClient(endpoint, {
      headers: {
        "x-token": "u3f6KGeiUMGu9Han6o-xlUZwOKNW1j8x"
      }
    });
  });
  return [graphQLClient];
};

export default useClient;
