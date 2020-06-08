import React from "react";
import Skeleton from "@mindtickle/mt-ui-components/Skeleton";
import { StyledListTable } from "./style";

const RowLoader = () => {
  return (
    <StyledListTable>
      <tr>
        <td className="accreditation-column">
          <Skeleton
            withoutIndentProps={{
              active: true,
              avatar: {
                size: "small",
                shape: "square",
                width: "20px",
                height: "20px"
              },
              title: {
                width: "100%",
                height: "20px",
                style: { margin: "0", borderRadius: "4px" }
              }
            }}
          />
        </td>
        <td className="status-column">
          <Skeleton
            withoutIndentProps={{
              active: true,
              avatar: false,
              title: {
                width: "100p%",
                height: "20px",
                style: { margin: "0", borderRadius: "4px" }
              }
            }}
          />
        </td>
        <td className="module-completed-column">
          <Skeleton
            withoutIndentProps={{
              active: true,
              avatar: false,
              title: {
                width: "100%",
                height: "20px",
                style: { margin: "0", borderRadius: "4px" }
              }
            }}
          />
        </td>
      </tr>
    </StyledListTable>
  );
};

const emptyArrayToIterate = Array(5).fill(Math.random());
const RepeatItems = () => {
  return emptyArrayToIterate.map(() => (
    <tr>
      <td className="accreditation-column">
        <Skeleton
          withoutIndentProps={{
            active: true,
            avatar: {
              size: "small",
              shape: "square",
              width: "20px",
              height: "20px"
            },
            title: {
              width: "100%",
              height: "20px",
              style: { margin: "0", borderRadius: "4px" }
            }
          }}
        />
      </td>
      <td className="status-column">
        <Skeleton
          withoutIndentProps={{
            active: true,
            avatar: false,
            title: {
              width: "100%",
              height: "20px",
              style: { margin: "0", borderRadius: "4px" }
            }
          }}
        />
      </td>
      <td className="module-completed-column">
        <Skeleton
          withoutIndentProps={{
            active: true,
            avatar: false,
            title: {
              width: "100%",
              height: "20px",
              style: { margin: "0", borderRadius: "4px" }
            }
          }}
        />
      </td>
    </tr>
  ));
};

const Loader = () => {
  return (
    <StyledListTable>
      <tr>
        <th className="accreditation-column">
          <Skeleton
            withoutIndentProps={{
              active: true,
              avatar: false,
              title: {
                width: "60%",
                height: "20px",
                style: { margin: "0", borderRadius: "4px" }
              }
            }}
          />
        </th>
        <th className="status-column">
          <Skeleton
            withoutIndentProps={{
              active: true,
              avatar: false,
              title: {
                width: "60%",
                height: "20px",
                style: { margin: "0", borderRadius: "4px" }
              }
            }}
          />
        </th>
        <th className="module-completed-column">
          <Skeleton
            withoutIndentProps={{
              active: true,
              avatar: false,
              title: {
                width: "60%",
                height: "20px",
                style: { margin: "0", borderRadius: "4px" }
              }
            }}
          />
        </th>
      </tr>
      <RepeatItems />
    </StyledListTable>
  );
};

export { RowLoader };

export default Loader;
