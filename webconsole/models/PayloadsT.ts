/** @format */

import { z } from "zod";
import { GridRowId } from "@mui/x-data-grid";

const SeverityS = z.union([
  z.literal("Safe"),
  z.literal("Warning"),
  z.literal("Critical"),
  z.literal(undefined),
]);
const PayloadS = z.object({
  id: z.number(),
  payload: z.string(),
  expected: z.string(),
  severity: SeverityS,
} as const);
export const PayloadsS = z.array(PayloadS);

export type SeverityT = z.infer<typeof SeverityS>;
export type PayloadT = z.infer<typeof PayloadS>;
export type PayloadsT = z.infer<typeof PayloadsS>;
export type SelectedT = Readonly<GridRowId[]>;

export type FormStateT = Readonly<{
  endpoint: string;
  payloads: PayloadT[];
  selections: SelectedT;
  errorMsg: string | null;
}>;
