/** @format */

import { Chip } from "@mui/material";
import {
  Check,
  WarningAmber,
  Cancel,
  HelpOutline,
  Loop,
  PriorityHigh
} from "@mui/icons-material";
import { GridComparatorFn } from "@mui/x-data-grid";
import { SeverityT } from "../models/PayloadsT";
import { ChipT, ChipsT } from "../models/statusChipT";
import styles from "./statusChip.module.css";

const statusChip = (severity: SeverityT): ChipsT => {
  return {
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
    serverError: {
      priority: 4,
      chip: (
        <Chip
          variant="outlined"
          color="error"
          label={"Server Error"}
          icon={<PriorityHigh />}
        />
      ),
    },
  };
};

export const makeStatusChip = (severity: SeverityT): ChipT => {
  const chip = statusChip(severity);
  if (typeof severity === "undefined" || !(severity in chip)) {
    return {
      priority: 5,
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

export const resultsComparator: GridComparatorFn = (
  severityL?: SeverityT,
  severityR?: SeverityT
) => {
  if (typeof severityL === "undefined") {
    return 1;
  }
  if (typeof severityR === "undefined") {
    return -1;
  }
  const priorityL = (statusChip(severityL)[severityL] as ChipT).priority;
  const priorityR = (statusChip(severityR)[severityR] as ChipT).priority;
  if (priorityL === priorityR) return 0;
  if (priorityL < priorityR) return -1;
  if (priorityL > priorityR) return 1;
};
