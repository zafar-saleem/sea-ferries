import Image from "next/image";
import { StyledContainer } from "./search.styled";
import SearchIcon from "./assets/search.webp";

export const Search = () => {
  return (
    <StyledContainer>
      <Image
        src={SearchIcon}
        width={19}
        height={19}
        alt="Search"
      />
      <input type="text" name="search" placeholder="Search" />
    </StyledContainer>
  )
}