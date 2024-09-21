import { IProps } from "./interfaces";
import { StyledGrid } from "./grid.styled";

export const Grid = ({ children, ...props }: IProps) => {
  const {
    rows,
    cols,
    responsive,
  } = props;

  return (
    <StyledGrid rows={rows} cols={cols} responsive={responsive}>{ children }</StyledGrid>
  )
}