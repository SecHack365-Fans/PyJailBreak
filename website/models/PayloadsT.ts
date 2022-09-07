/** @format */

import { z } from "zod";
import { GridRowId } from "@mui/x-data-grid";

export const severities = [
  "safe",
  "warning",
  "critical",
  "executing",
  "unknown",
] as const;
const SeverityS = z.enum(severities);
const PayloadS = z.object({
  payload: z.string().array(),
  unexpected: z.string().array(),
  severity: SeverityS,
  payload_option: z.enum(["plain", "eval"]).optional(),
  unexpected_option: z.enum(["plain", "eval", "regex"]).optional(),
  result: SeverityS.optional(),
} as const);
export const PayloadsS = z.array(PayloadS.and(z.object({ id: z.number() })));

export type SeverityT = z.infer<typeof SeverityS>;
export type PayloadT = z.infer<typeof PayloadS>;
export type PayloadsT = z.infer<typeof PayloadsS>;
export type SelectedT = Readonly<GridRowId[]>;

export const APIResponseS = z.object({
  success: z.boolean(),
  severity: SeverityS,
  error: z.string().optional(),
} as const);
export type APIResponseT = z.infer<typeof APIResponseS>;
