/** @format */

import { PayloadT, PayloadsT } from "../models/PayloadsT";

export const payloads: PayloadsT = [
  {
    payload: "__import__('os').system('echo \"Expected String\"')",
    expected: "Expected String",
    severity: "Safe",
  },
  {
    payload:
      "__import__('os').system('echo \"Expected String is Toooooo Long\"')",
    expected: "Expected String is Toooooo Long",
    severity: "Warning",
  },
  {
    payload: "__import__('os').system('echo \"Dangerous\"')",
    expected: "Dangerous",
    severity: "Critical",
  },
  {
    payload: "__import__('os').system('sleep 100')",
    expected: "",
    severity: "Executing",
  },
  {
    payload: "print('1')",
    expected: "1",
  },
].map((payload: PayloadT, id) => ({
  id: id,
  ...payload,
}));
