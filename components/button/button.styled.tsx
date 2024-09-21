import styled from "styled-components";

export const StyledButton = styled.button`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  width: 250px;
  height: 50px;
  background-color: ${props => props.theme.tokens.colors.branding.brand100};
  border: 2px solid #ffdb01;
  border-radius: 10px;
  color: ${props => props.theme.tokens.colors.font.font200};

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
`;
