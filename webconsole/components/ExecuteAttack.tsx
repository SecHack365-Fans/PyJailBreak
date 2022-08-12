/** @format */

import React from "react";
import { PayloadsT } from "../models/PayloadsT";
import { Button } from "@mui/material";

type ExecStateT = {
  endpoint: string;
  selectedPayloads: PayloadsT;
};

class ExecuteAttack extends React.Component<{}, ExecStateT> {
  constructor(props: {}) {
    super(props);
    this.state = {
      endpoint: "",
      selectedPayloads: [],
    };
  }

  executeAttack = () => {
    console.log("Execute Attack");
  };

  render(): React.ReactNode {
    return (
      <Button onClick={this.executeAttack}>
        Execute!{this.state.endpoint}
      </Button>
    );
  }
}

export default ExecuteAttack;
