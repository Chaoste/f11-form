import styled from "styled-components";

export const FooterStyled = styled.div`
  background-color: white;
  padding: 8px 24px;
  border-top: 1px solid #cccccc;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: absolute;
  bottom: 0;
  width: 100%;

  & img {
    height: 24px;
    margin-right: 4px;
  }

  & a {
    transition: all 200ms ease-in-out;
    color: #666;
    font-size: 12px;
    line-height: 24px;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
