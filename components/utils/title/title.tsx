import * as Styled from "./title.styled";
import React from "react";

export const Title = ({ children }: React.PropsWithChildren) => {
  return (
    <Styled.StyledTitle>{ children }</Styled.StyledTitle>
  )
}
