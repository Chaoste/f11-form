import styled from "styled-components";

export const LogoWrapperStyled = styled.div`
  text-align: left;
  flex: 0 1 50px;
  @media screen and (min-width: 768px) {
    flex: 0 1 160px;
  }

  & img {
    transition: all 200ms ease-in-out;
    height: 40px;
    @media screen and (min-width: 768px) {
      height: 80px;
    }
  }

  &:hover,
  &:active,
  &:focus {
    & img {
      transform: scale(1.1);
    }
  }
`;
