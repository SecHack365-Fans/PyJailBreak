/** @format */

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { GridRowId } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { List, ListItem } from "@mui/material";
import { Delete, Add } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { PayloadsT } from "../models/PayloadsT";
import { getPayloads, setPayloads } from "../models/payloadsSlice";
import {
  getModeState,
  getPayloadOpenState,
  getOptionsOpenState,
  getRowIdState,
} from "../models/dialogSlice";
import { HelpOutline } from "@mui/icons-material";

type ParamsT = {
  handleClose: (rowId: GridRowId) => void;
};

// TODO: refactor onClick, onChange
export const PayloadsEditor = (params: ParamsT) => {
  const [newText, setNewText] = React.useState("");
  const dispatch = useDispatch();
  const payloads: PayloadsT = useSelector(getPayloads);
  const open = useSelector(getPayloadOpenState);
  const rowId = useSelector(getRowIdState);
  const mode = useSelector(getModeState);
  const title = (mode: "payload" | "unexpected") =>
    mode === "payload" ? "Payload" : "Unexpected Output";
  return (
    <Dialog
      open={open}
      onClose={() => {
        setNewText("");
        params.handleClose(rowId);
      }}
      fullWidth
      maxWidth={"sm"}
    >
      <DialogTitle>
        Change {title(mode)} #{rowId}
      </DialogTitle>
      <DialogContent>
        <List>
          {payloads[rowId][mode].map((payload: string, idx: number) => (
            <ListItem key={idx}>
              <TextField
                label={`${title(mode)} ${idx}`}
                value={payload}
                fullWidth
                variant="standard"
                autoComplete="off"
                onChange={(e) => {
                  const newPayloads = [
                    ...payloads.slice(0, rowId as number),
                    {
                      ...payloads[rowId],
                      payload: [
                        ...payloads[rowId][mode].slice(0, idx),
                        e.target.value,
                        ...payloads[rowId][mode].slice(idx + 1),
                      ],
                    },
                    ...payloads.slice((rowId as number) + 1),
                  ];
                  dispatch(setPayloads(newPayloads));
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => {
                          const newPayloads = [
                            ...payloads.slice(0, rowId as number),
                            {
                              ...payloads[rowId],
                              payload:
                                mode === "payload"
                                  ? [
                                      ...payloads[rowId].payload.slice(0, idx),
                                      ...payloads[rowId].payload.slice(idx + 1),
                                    ]
                                  : payloads[rowId].payload,
                              unexpected:
                                mode === "unexpected"
                                  ? [
                                      ...payloads[rowId].unexpected.slice(
                                        0,
                                        idx
                                      ),
                                      ...payloads[rowId].unexpected.slice(
                                        idx + 1
                                      ),
                                    ]
                                  : payloads[rowId].unexpected,
                            },
                            ...payloads.slice((rowId as number) + 1),
                          ];
                          dispatch(setPayloads(newPayloads));
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </ListItem>
          ))}
          <ListItem>
            <TextField
              fullWidth
              variant="standard"
              autoComplete="off"
              label={`Add new ${title(mode)}`}
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => {
                        if (newText == "") return;
                        let newPayloads = [
                          ...payloads.slice(0, rowId as number),
                          {
                            ...payloads[rowId],
                            payload:
                              mode === "payload"
                                ? payloads[rowId].payload.concat([newText])
                                : payloads[rowId].payload,
                            unexpected:
                              mode === "unexpected"
                                ? payloads[rowId].unexpected.concat([newText])
                                : payloads[rowId].unexpected,
                          },
                          ...payloads.slice((rowId as number) + 1),
                        ];
                        dispatch(setPayloads(newPayloads));
                        setNewText("");
                      }}
                    >
                      <Add />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
};

export const OptionsEditor = (params: ParamsT) => {
  const dispatch = useDispatch();
  const payloads: PayloadsT = useSelector(getPayloads);
  const open = useSelector(getOptionsOpenState);
  const rowId = useSelector(getRowIdState);
  const textFieldStyle = {
    maxWidth: "600px",
    m: "1em 2px 0.5em 2px",
  };
  return (
    <Dialog
      open={open}
      onClose={() => {
        params.handleClose(rowId);
      }}
      fullWidth
      maxWidth={"sm"}
      sx={{ textAlign: "center" }}
    >
      <DialogTitle>Change Options #{rowId}</DialogTitle>
      <DialogContent>
        <h3>Payload Options</h3>
        <TextField
          select
          variant="standard"
          label="Payload Options"
          value={payloads[rowId].payload_option ?? "none"}
          onChange={(e) =>
            dispatch(
              setPayloads(changePayloadOptions(payloads, rowId, e.target.value))
            )
          }
          sx={Object.assign({}, textFieldStyle, {
            width: "25%",
          })}
        >
          <MenuItem value="none">None</MenuItem>
          <MenuItem value="eval">
            <>
              eval
              <Tooltip title="Treats strings as Python scripts">
                <HelpOutline sx={{ fontSize: "1em", ml: "2px" }} />
              </Tooltip>
            </>
          </MenuItem>
        </TextField>
        <h3>Unexpected Options</h3>
        <TextField
          select
          variant="standard"
          label="Unexpected Options"
          value={payloads[rowId].unexpected_option ?? "none"}
          onChange={(e) =>
            dispatch(
              setPayloads(
                changeUnexpectedOptions(payloads, rowId, e.target.value)
              )
            )
          }
          sx={Object.assign({}, textFieldStyle, {
            width: "25%",
          })}
        >
          <MenuItem value="none">None</MenuItem>
          <MenuItem value="eval">
            <>
              eval
              <Tooltip title="Treats strings as Python scripts">
                <HelpOutline sx={{ fontSize: "1em", ml: "2px" }} />
              </Tooltip>
            </>
          </MenuItem>
          <MenuItem value="regex">
            <>
              regex
              <Tooltip title="Treats strings as Regex">
                <HelpOutline sx={{ fontSize: "1em", ml: "2px" }} />
              </Tooltip>
            </>
          </MenuItem>
        </TextField>
      </DialogContent>
    </Dialog>
  );
};

const changePayloadOptions = (
  payloads: PayloadsT,
  rowId: GridRowId,
  option: string
) => {
  return [
    ...payloads.slice(0, rowId as number),
    {
      ...payloads[rowId],
      payload_option: option == "none" ? undefined : option,
    },
    ...payloads.slice((rowId as number) + 1),
  ];
};
const changeUnexpectedOptions = (
  payloads: PayloadsT,
  rowId: GridRowId,
  option: string
) => {
  return [
    ...payloads.slice(0, rowId as number),
    {
      ...payloads[rowId],
      unexpected_option: option,
    },
    ...payloads.slice((rowId as number) + 1),
  ];
};
