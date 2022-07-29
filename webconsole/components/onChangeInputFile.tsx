/** @format */

import React from "react";
import { PayloadT, PayloadsT, PayloadsS } from "../models/PayloadsT";
import { Base64 } from "js-base64";

export const onChangeInputFile = (
  err: React.ChangeEvent<HTMLInputElement>,
  setPayloads: (payloads: PayloadsT) => void,
  setFileReadError: (err: string) => void
) => {
  if (err.target.files && err.target.files[0]) {
    const file = err.target.files[0];
    const reader = new FileReader();
    reader.onload = (err: ProgressEvent<FileReader>) => {
      const userBase64Payloads: string = (() => {
        if (typeof err.target.result === "string") {
          return err.target.result;
        }
        if (err.target.result instanceof ArrayBuffer) {
          return String.fromCharCode.apply(
            "",
            new Uint16Array(err.target.result)
          );
        }
      })();
      if (!userBase64Payloads.startsWith("data:application/json;base64,")) {
        setFileReadError("json形式のファイルではありません");
        return;
      }
      const userPayloads = Base64.decode(userBase64Payloads.split(",")[1]);
      console.log(userPayloads);
      let parsedJson: PayloadsT = [{}];
      try {
        parsedJson = JSON.parse(userPayloads);
      } catch {
        setFileReadError("jsonのパースに失敗しました");
        return;
      }
      try {
        const idxedParsedJson = parsedJson.map((payload: PayloadT, id) => ({
          id: id,
          ...payload,
        }));
        const persedPayloads = PayloadsS.parse(idxedParsedJson);
        setPayloads(persedPayloads);
      } catch {
        setFileReadError("ペイロードファイルの形式が不正です");
      }
    };
    reader.readAsDataURL(file);
  }
};
