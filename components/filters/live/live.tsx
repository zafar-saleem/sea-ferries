import { Icon } from "../components/icon/icon";
import Map from "./assets/map.webp";
import { StyledLive } from "./live.styled";

export const Live = ({ children }: React.PropsWithChildren) => {
  return (
    <StyledLive>
      <Icon
        icon={Map}
        width={24}
        height={21}
        alt="Filter icon"
      />
      { children }
    </StyledLive>
  )
}