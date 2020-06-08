import React from "react";
import PropTypes from "prop-types";

import useGraphqlData from "../../hooks/useGraphqlData";

import List from "../List";
import Header from "../Header";

const Wrapper = ({ lastUpdatedAtForOthers, userId }) => {
  const {
    list,
    error,
    loaded,
    loading,
    hasError,
    loadmore,
    aggregations,
    lastUpdatedAt
  } = useGraphqlData(userId);
  return (
    <>
      <Header
        loading={loading}
        totalCount={list.total}
        pendingCount={aggregations.pendingCount}
        lastUpdatedAtForAccreditation={lastUpdatedAt}
        accreditedCount={aggregations.accreditedCount}
        lastUpdatedAtForOthers={lastUpdatedAtForOthers}
        unsuccessfulCount={aggregations.unsuccessfulCount}
      />
      <List
        error={error}
        loaded={loaded}
        data={list.data}
        loading={loading}
        loadmore={loadmore}
        hasError={hasError}
        hasMore={list.hasMore}
      />
    </>
  );
};

Wrapper.propTypes = {
  lastUpdatedAtForOthers: PropTypes.number.isRequired
};

export default Wrapper;
