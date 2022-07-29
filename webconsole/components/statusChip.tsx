/** @format */

import { SeverityT } from "../models/PayloadsT";
import { Chip } from "@mui/material";
import { Check, WarningAmber, Cancel, HelpOutline } from "@mui/icons-material";

export const makeStatusChip = (severity: SeverityT) => {
  if (severity === "Safe") {
    return (
      <Chip
        variant="outlined"
        color="success"
        label={severity}
        icon={<Check />}
      />
    );
  } else if (severity === "Warning") {
    return (
      <Chip
        variant="outlined"
        color="warning"
        label={severity}
        icon={<WarningAmber />}
      />
    );
  } else if (severity === "Critical") {
    return (
      <Chip
        variant="outlined"
        color="error"
        label={severity}
        icon={<Cancel />}
      />
    );
  } else {
    return (
      <Chip
        variant="outlined"
        color="info"
        label="Not Finished"
        icon={<HelpOutline />}
      />
    );
  }
};
