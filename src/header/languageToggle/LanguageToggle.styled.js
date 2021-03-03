import styled from "styled-components";

export const LanguageToggleStyled = styled.div`
  text-align: right;
  flex: 0 1 160px;
  white-space: nowrap;
`;

export const LanguageButtonStyled = styled.button`
  appearance: none;
  border: none;
  background: none;
  outline: none !important;
  cursor: pointer;
  padding: 2px 8px;

  & img {
    height: 18px;
    opacity: 0.3;
    transition: all 200ms ease-in-out;

    &:hover {
      opacity: 0.5;
    }

    &[data-toggled="true"] {
      opacity: 0.7;
    }
  }
`;
