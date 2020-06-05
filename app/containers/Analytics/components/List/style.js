import styled from "styled-components";
import mixins from "@mindtickle/mt-ui-components/styles/mixins";
import theme from "@mindtickle/mt-ui-components/styles/theme";

export const StyledListTable = styled.table`
  width: 100%;
  padding: 0 20px;

  th {
    ${mixins.blackLink()};
    line-height: 16px;
    padding: 4px 20px 4px 0;
  }

  td {
    border-top: 2px solid ${theme.colors.ALTO};
    padding: 16px 20px 16px 0;
  }

  th,
  td {
    &:first-of-type {
      padding-left: 20px;
    }
  }

  .accreditation-column {
    width: 50%;
    text-align: left;
  }

  .status-column {
    width: 25%;
    text-align: left;
  }

  .module-completed-column {
    width: 25%;
    text-align: right;
  }
`;

export const StyledThumbnail = styled.div`
  .accreditation-icon {
    display: inline-block;
    vertical-align: top;
    font-size: 16px;
    color: ${theme.colors.GREY};
    line-height: 20px;
  }

  .accreditation-text-wrapper {
    display: inline-block;
    vertical-align: top;
    margin-left: 8px;

    .accreditation-name {
      font-size: 13px;
      line-height: 20px;
      color: ${theme.colors.SHARK};
    }

    .accreditation-due-date {
      margin-top: 4px;
      font-size: 12px;
      line-height: 16px;
      color: ${theme.colors.GREY};
    }
  }
`;

export const StyledStatus = styled.div`
  font-size: 13px;
  line-height: 20px;

  &.accredited-color {
    color: ${theme.colors.KOROMIKO};
  }

  &.unsuccessful-color {
    color: ${theme.colors.BITTERSWEET};
  }

  &.pending-color {
    color: ${theme.colors.GREY};
  }
`;

export const StyledModuleCompleted = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: ${theme.colors.SHARK};
`;
