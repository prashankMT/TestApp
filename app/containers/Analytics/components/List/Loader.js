import React from "react";
import Skeleton from "@mindtickle/mt-ui-components/Skeleton";
import { StyledListTable } from "./style";

const RowLoader = () => {
  return (
    <StyledListTable style={{ height: "auto" }}>
      <tbody>
        <tr>
          <td className="accreditation-column">
            <Skeleton
              withoutIndentProps={{
                active: true,
                avatar: {
                  size: "small",
                  shape: "square",
                  width: "16px",
                  height: "20px"
                },
                title: {
                  width: "92%",
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
                  width: "80%",
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
                  width: "44%",
                  height: "20px",
                  style: { margin: "0", borderRadius: "4px", float: "right" }
                }
              }}
            />
          </td>
        </tr>
      </tbody>
    </StyledListTable>
  );
};

const emptyArrayToIterate = Array(5).fill(Math.random());
const RepeatItems = () => {
  return emptyArrayToIterate.map(() => (
    <tbody>
      <tr>
        <td className="accreditation-column">
          <Skeleton
            withoutIndentProps={{
              active: true,
              avatar: {
                size: "small",
                shape: "square",
                width: "16px",
                height: "20px"
              },
              title: {
                width: "92%",
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
                width: "80%",
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
                width: "44%",
                height: "20px",
                style: { margin: "0", borderRadius: "4px", float: "right" }
              }
            }}
          />
        </td>
      </tr>
    </tbody>
  ));
};

const Loader = () => {
  return (
    <StyledListTable>
      <thead>
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
                  width: "80%",
                  height: "20px",
                  style: { margin: "0", borderRadius: "4px", float: "right" }
                }
              }}
            />
          </th>
        </tr>
      </thead>
      <RepeatItems />
    </StyledListTable>
  );
};

export { RowLoader };

export default Loader;
