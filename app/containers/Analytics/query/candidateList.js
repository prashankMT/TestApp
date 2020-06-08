const candidateList = `listCandidates(pagination: $pagination) {
    total
    hasMore
    cursor
    data {
      accreditation {
        id
        name
        dueDate {
          enabled
        }
      }
      dueDate
      evaluationState
      moduleActivityAggregation {
        count
        moduleState
      }
    }
  }`;

export default candidateList;
