import styled from "styled-components";

export const StyledLive = styled.button`
  background-color: ${props => props.theme.tokens.colors.bg.color100};
  color: ${props => props.theme.tokens.colors.branding.brand100};
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 200px;
  position: absolute;
  right: 0;
  top: 5px;

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
`;
