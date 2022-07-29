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

const statusChip = (severity: SeverityT) => {
  return {
    safe: {
      priority: 1,
      chip: (
        <Chip
          variant="outlined"
          color="success"
          label={severity}
          icon={<Check />}
          sx={{ fontWeight: "bold", borderWidth: "2px" }}
        />
      ),
    },
    warning: {
      priority: 2,
      chip: (
        <Chip
          variant="outlined"
          color="warning"
          label={severity}
          icon={<WarningAmber />}
        />
      ),
    },
    critical: {
      priority: 3,
      chip: (
        <Chip
          variant="outlined"
          color="error"
          label={severity}
          icon={<Cancel />}
        />
      ),
    },
    executing: {
      priority: 0,
      chip: (
        <Chip
          variant="outlined"
          color="info"
          label={severity}
          icon={<Loop className={styles.rotateIcon} />}
        />
      ),
    },
  };
};

export const makeStatusChip = (severity: SeverityT) => {
  const chip = statusChip(severity);
  if (typeof severity === "undefined" || !(severity in chip)) {
    return {
      priority: 4,
      chip: (
        <Chip
          variant="outlined"
          color="info"
          label="Not Finished"
          icon={<HelpOutline />}
        />
      ),
    };
  } else {
    return chip[severity];
  }
};
