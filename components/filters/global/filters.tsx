import React from "react";
import { FilterContainer } from "../components/filter/filter-container";
import Filter from "./assets/filter.webp";
import { Icon } from "../components/icon/icon";

export const GlobalFilters = ({ children }: React.PropsWithChildren) => {
  return (
    <FilterContainer>
      <Icon
        icon={Filter}
        width={24}
        height={21}
        alt="Filter icon"
      />
      { children }
    </FilterContainer>
  )
}
