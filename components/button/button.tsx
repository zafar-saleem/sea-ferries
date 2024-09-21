import React from "react";
import { StyledButton } from "./button.styled";
import Image from "next/image";
import Arrow from "./assets/arrow.webp";

export const Button = ({ children }: React.PropsWithChildren) => {
  return (
    <StyledButton>
      <Image 
        src={Arrow}
        width={9}
        height={16}
        alt="Book your tickets"
      />
      { children }
    </StyledButton>
  )
}
