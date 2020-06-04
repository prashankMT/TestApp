import React, { useMemo } from "react";
import PropTypes from "prop-types";
import InfiniteLoader from "@mindtickle/mt-ui-components/InfiniteLoader";

import withErrorHandler from "../../hocs/withErrorHandler";

import Loader, { RowLoader } from "./Loader";
import Content from "./Content";

const List = ({ data, loading, loadmore, hasMore }) => {
  console.log(data, "--------------"); //eslint-disable-line
  const infiniteLoaderProps = useMemo(() => ({
    hasMore: hasMore,
    loadMore: loadmore,
    useWindow: false,
    initialLoad: false,
    loader: <RowLoader />
  }));
  if (loading) return <Loader />;
  return (
    <InfiniteLoader {...infiniteLoaderProps}>
      <Content data={data} />
    </InfiniteLoader>
  );
};

List.propTypes = {
  data: PropTypes.array,
  hasMore: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  loadmore: PropTypes.func.isRequired
};

export default withErrorHandler(List);
