/** @format */

import { z } from "zod";
import { GridRowId } from "@mui/x-data-grid";

const SeverityS = z
  .enum(["safe", "warning", "critical", "executing", "serverError"]);
const PayloadS = z.object({
  payload: z.string().array(),
  unexpected: z.string().array(),
  severity: SeverityS,
  result: SeverityS.optional()
} as const);
export const PayloadsS = z.array(PayloadS.merge(z.object({ id: z.number() })));

export type SeverityT = z.infer<typeof SeverityS>;
export type PayloadT = z.infer<typeof PayloadS>;
export type PayloadsT = z.infer<typeof PayloadsS>;
export type SelectedT = Readonly<GridRowId[]>;
