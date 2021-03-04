import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: #d5d5e5;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    padding: 16px 24px;
  }
`;
