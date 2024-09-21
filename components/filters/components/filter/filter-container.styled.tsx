import styled from "styled-components";

export const StyledFilter = styled.button`
  background-color: ${props => props.theme.tokens.colors.bg.color100};
  color: ${props => props.theme.tokens.colors.font.font100};
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
