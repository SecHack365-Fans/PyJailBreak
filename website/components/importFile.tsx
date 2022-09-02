/** @format */

import React from "react";
import { PayloadT, PayloadsT, PayloadsS } from "../models/PayloadsT";
import { Base64 } from "js-base64";

const userBase64Payloads = (result) => {
  if (typeof result === "string") {
    return result;
  }
  if (result instanceof ArrayBuffer) {
    return String.fromCharCode.apply("", new Uint16Array(result));
  }
};

export const onChangeInputFile = (
  e: React.ChangeEvent<HTMLInputElement>,
  setPayloads: (payloads: PayloadsT) => void,
  setFileReadError: (err: string | null) => void
) => {
  setFileReadError(null);
  if (!e.target.files || !e.target.files[0]) {
    setFileReadError("Unexpected Error!");
    return;
  }
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (e: ProgressEvent<FileReader>) => {
    if (
      !userBase64Payloads(e.target.result).startsWith(
        "data:application/json;base64,"
      )
    ) {
      setFileReadError("json形式のファイルではありません");
      return;
    }
    const userPayloads = Base64.decode(
      userBase64Payloads(e.target.result).split(",")[1]
    );
    console.log("Read: ", userPayloads);
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
};
