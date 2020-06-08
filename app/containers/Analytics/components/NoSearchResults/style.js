import styled from "styled-components";
import mixins from "@mindtickle/mt-ui-components/styles/mixins";

export default styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  .noSearchResultsImage {
    margin: 16px;
    display: inline-block;
  }

  .noSearchResultsTextStyle {
    margin: 16px;
    ${mixins.blackLink()};
  }
`;
