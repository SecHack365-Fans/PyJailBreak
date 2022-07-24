/** @format */

import React, { useState } from "react";
import { PayloadT, PayloadsS } from "../models/PayloadsT";
import { Base64 } from "js-base64";

export interface Props {
  defaultValue?: PayloadT[];
}

const InputFile: React.FC<Props> = ({ defaultValue }) => {
  const [payloads, setValue] = useState(defaultValue);
  const [error, setError] = useState("");
  const onChangeInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        console.log(e.target.result);
        const userBase64Payloads: string = (() => {
          if (typeof e.target.result === "string") {
            return e.target.result;
          }
          if (e.target.result instanceof ArrayBuffer) {
            return String.fromCharCode.apply(
              "",
              new Uint16Array(e.target.result)
            );
          }
        })();
        if (!userBase64Payloads.startsWith("data:application/json;base64,")) {
          setError("json形式のファイルではありません");
          return;
        }
        const userPayloads = Base64.decode(userBase64Payloads.split(",")[1]);
        console.log(userPayloads);
        try {
          const persedPayloads = PayloadsS.safeParse(JSON.parse(userPayloads));
          if (persedPayloads.success) {
            setValue(persedPayloads.data);
            return;
          } else if (!persedPayloads.success) {
            setError("ペイロードファイルの形式が不正です");
            return;
          }
        } catch {
          setError("jsonのパースに失敗しました");
          return;
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <input type="file" onChange={onChangeInputFile} />
      <div>{JSON.stringify(payloads)}</div>
      <div>{error}</div>
    </div>
  );
};

export default InputFile;
