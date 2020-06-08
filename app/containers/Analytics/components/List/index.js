import React, { useMemo } from "react";
import PropTypes from "prop-types";
import InfiniteLoader from "@mindtickle/mt-ui-components/InfiniteLoader";

import { StyledList } from "./style";

import withErrorHandler from "../../hocs/withErrorHandler";

import Loader, { RowLoader } from "./Loader";
import Content from "./Content";
import NoSearchResults from "./NoResult";

const List = ({ data, loading, loadmore, hasMore }) => {
  const infiniteLoaderProps = useMemo(() => ({
    hasMore: hasMore,
    loadMore: loadmore,
    useWindow: false,
    initialLoad: false,
    loader: <RowLoader />
  }));
  if (loading) return <Loader />;
  return (
    <StyledList>
      {!!data.length ? (
        <InfiniteLoader {...infiniteLoaderProps}>
          <Content data={data} />
        </InfiniteLoader>
      ) : (
        <NoSearchResults />
      )}
    </StyledList>
  );
};

List.propTypes = {
  data: PropTypes.array,
  hasMore: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  loadmore: PropTypes.func.isRequired
};

export default withErrorHandler(List);
