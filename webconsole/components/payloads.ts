/** @format */

import { PayloadT } from "../models/PayloadsT";

export const payloads: PayloadT[] = [
  {
    id: 1,
    payload: "__import__('os').system('echo \"Expected String\"')",
    expected: "Expected String",
    severity: "Safe",
  },
  {
    id: 2,
    payload:
      "__import__('os').system('echo \"Expected String is Toooooo Long\"')",
    expected: "Expected String is Toooooo Long",
    severity: "Warning",
  },
  {
    id: 3,
    payload: "__import__('os').system('echo \"Dangerous\"')",
    expected: "Dangerous",
    severity: "Critical",
  },
  {
    id: 4,
    payload: "print(1)",
    expected: "1",
    severity: undefined,
  },
];
