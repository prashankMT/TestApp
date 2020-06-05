import styled from "styled-components";
import mixins from "@mindtickle/mt-ui-components/styles/mixins";
import theme from "@mindtickle/mt-ui-components/styles/theme";

export const StyledTitle = styled.div`
  ${mixins.h3()};
`;

export const StyledUpdateInfo = styled.div`
  font-size: 12px;
  color: ${theme.colors.GREY};
  line-height: 24px;
  font-style: italic;
  ${mixins.clearfix()};

  .common-info-style {
    float: left;
  }

  .accreditation-info-style {
    padding-left: 4px;
    font-size: 14px;
    color: ${theme.colors.GREY};
    line-height: 24px;
  }
`;

export const StyledStats = styled.div`
  font-size: 13px;
  color: ${theme.colors.GREY};
  line-height: 20px;
`;

export const StyledInfo = styled.div`
  font-size: 13px;
  line-height: 20px;

  .margin-second-line {
    margin-top: 10px;
  }
`;

export const StyledHeader = styled.div`
  padding: 8px 20px;
  border-bottom: 1px solid ${theme.colors.ALTO};

  .heading-name-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .stats-style {
    margin-top: 2px;
  }
`;
