import aggregation from "./accreditationAggregate";
import list from "./candidateList";

export const combinedQuery = `query($userId: String!, $pagination: Page!) {
    user {
      user(userId: $userId) {
        ${list}
        ${aggregation}
      }
    }
  }`;

export const listQuery = `query($userId: String!, $pagination: Page!) {
  user {
    user(userId: $userId) {
      ${list}
    }
  }
}`;
