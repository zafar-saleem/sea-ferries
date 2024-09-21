import * as Styled from "./container.styled";

export const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <Styled.Center>{ children }</Styled.Center>
  )
}
