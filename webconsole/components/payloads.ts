/** @format */

import { PayloadT, PayloadsT } from "../models/PayloadsT";

export const payloads: PayloadsT = (
  [
    {
      payload: "__import__('os').system('echo \"Expected String\"')",
      expected: "Expected String",
      severity: "safe",
    },
    {
      payload:
        "__import__('os').system('echo \"Expected String is Toooooo Long\"')",
      expected: "Expected String is Toooooo Long",
      severity: "warning",
    },
    {
      payload: "__import__('os').system('echo \"Dangerous\"')",
      expected: "Dangerous",
      severity: "critical",
    },
    {
      payload: "__import__('os').system('sleep 100')",
      expected: "",
      severity: "executing",
    },
    {
      payload: "print('1')",
      expected: "1",
    },
  ] as PayloadT[]
).map((payload: PayloadT, id) => ({
  id: id,
  ...payload,
}));
