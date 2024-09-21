import { FilterContainer } from "../components/filter/filter-container";
import { Icon } from "../components/icon/icon";
import SortIcon from "./assets/sort.webp";

export const Sort = ({ children }: React.PropsWithChildren) => {
  return (
    <FilterContainer>
      <Icon
        icon={SortIcon}
        width={23}
        height={19}
        alt="Filter icon"
      />
      { children }
    </FilterContainer>
  )
}