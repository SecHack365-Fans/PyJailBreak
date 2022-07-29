/** @format */

import { SeverityT } from "../models/PayloadsT";
import { Chip } from "@mui/material";
import {
  Check,
  WarningAmber,
  Cancel,
  HelpOutline,
  Loop,
} from "@mui/icons-material";
import styles from "./statusChip.module.css";

export const makeStatusChip = (severity: SeverityT) => {
  if (severity === "Safe") {
    return (
      <Chip
        variant="outlined"
        color="success"
        label={severity}
        icon={<Check />}
        sx={{ fontWeight: "bold", borderWidth: "2px" }}
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
  } else if (severity === "Executing") {
    return (
      <Chip
        variant="outlined"
        color="info"
        label={severity}
        icon={<Loop className={styles.rotateIcon} />}
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
