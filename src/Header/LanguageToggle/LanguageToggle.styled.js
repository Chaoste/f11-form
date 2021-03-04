import styled from "styled-components";

export const LanguageToggleStyled = styled.div`
  text-align: right;
  white-space: nowrap;
  flex: 0 1 100px;
  @media screen and (min-width: 768px) {
    flex: 0 1 160px;
  }
`;

export const LanguageButtonStyled = styled.button`
  appearance: none;
  border: none;
  background: none;
  outline: none !important;
  cursor: pointer;
  padding: 2px 8px;

  & img {
    height: 12px;
    opacity: 0.3;
    transition: all 200ms ease-in-out;
    @media screen and (min-width: 768px) {
      height: 18px;
    }

    &:hover {
      opacity: 0.5;
    }

    &[data-toggled="true"] {
      opacity: 0.7;
    }
  }
`;
