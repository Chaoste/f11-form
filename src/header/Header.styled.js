import styled from "styled-components";

const HEADER_BACKGROUND_COLOR = "#A5A5FF";

const HeaderStyled = styled.div`
  background-color: ${HEADER_BACKGROUND_COLOR};
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: space-between;

  @media screen and (min-width: 768px) {
    height: 120px;
  }
`;

export default HeaderStyled;
