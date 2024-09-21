import styled from "styled-components";
import { IStyledProps } from "./interfaces";

export const StyledGrid = styled.div<IStyledProps>`
  position: relative;
  display: grid;
  grid-template-columns: ${props => props.cols.map(col => `${col}fr ` || `1fr`)};
  grid-template-rows: ${props => props.rows.map(row => `${row}fr ` || `1fr`)};
  grid-gap: 1rem;

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    grid-template-columns: .5fr 1fr;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    display: ${props => props?.responsive ? `block` : `grid`};
  }
`;
