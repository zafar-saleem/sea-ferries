import React from "react";
import { StyledFilter } from "./filter-container.styled";

export const FilterContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <StyledFilter>{ children }</StyledFilter>
  )
}