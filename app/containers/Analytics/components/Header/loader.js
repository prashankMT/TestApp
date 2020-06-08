import React from "react";
import Skeleton from "@mindtickle/mt-ui-components/Skeleton";
import { StyledStats } from "./style";

const Loader = () => {
  return (
    <StyledStats>
      <Skeleton
        withoutIndentProps={{
          active: true,
          avatar: false,
          title: {
            width: "80px",
            height: "20px",
            style: { margin: "0", borderRadius: "4px" }
          },
          className: "stats-loader-style"
        }}
      />
      <Skeleton
        withoutIndentProps={{
          active: true,
          avatar: false,
          title: {
            width: "80px",
            height: "20px",
            style: { margin: "0", borderRadius: "4px" }
          },
          className: "stats-loader-style"
        }}
      />
      <Skeleton
        withoutIndentProps={{
          active: true,
          avatar: false,
          title: {
            width: "80px",
            height: "20px",
            style: { margin: "0", borderRadius: "4px" }
          },
          className: "stats-loader-style"
        }}
      />
    </StyledStats>
  );
};

export default Loader;
