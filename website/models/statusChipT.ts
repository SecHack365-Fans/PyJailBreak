/** @format */
import { SeverityT } from "../models/PayloadsT";

export type ChipT = {
  priority: number;
  chip: JSX.Element;
};

export type ChipsT = {
  [key in SeverityT]: ChipT;
};
