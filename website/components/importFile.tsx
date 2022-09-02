/** @format */

import React from "react";
import { PayloadT, PayloadsT, PayloadsS } from "../models/PayloadsT";
import { Base64 } from "js-base64";
import toast from "react-hot-toast";

const userBase64Payloads = (result: string | ArrayBuffer) => {
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
) => {
  if (!e.target.files || !e.target.files[0]) {
    toast.error("Unexpected Error!");
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
      toast.error("json形式のファイルではありません");
      return;
    }
    const userPayloads = Base64.decode(
      userBase64Payloads(e.target.result).split(",")[1]
    );
    let parsedJson: PayloadsT = [{}];
    try {
      parsedJson = JSON.parse(userPayloads);
    } catch {
      toast.error("jsonのパースに失敗しました");
      return;
    }
    try {
      const idxedParsedJson = parsedJson.map((payload: PayloadT, id) => ({
        id: id,
        ...payload,
      }));
      console.log(idxedParsedJson)
      const persedPayloads = PayloadsS.parse(idxedParsedJson);
      setPayloads(persedPayloads);
    } catch (error) {
      console.error(error)
      toast.error("ペイロードファイルの形式が不正です");
    }
  };
  reader.readAsDataURL(file);
};
