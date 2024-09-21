import React from "react";

export interface IProps {
  children: React.ReactNode;
  rows: number[];
  cols: number[];
  responsive?: boolean;
}

export interface IStyledProps {
  rows: number[];
  cols: number[];
  responsive?: boolean;
}