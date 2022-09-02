/** @format */

import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { GridRowId } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
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
  getOpenState,
  getRowIdState,
} from "../models/payloadsDialogSlice";

type ParamsT = {
  handleClose: (rowId: GridRowId) => void;
};

// TODO: refactor onClick, onChange
export const DialogEditor = (params: ParamsT) => {
  const [newText, setNewText] = React.useState("");
  const dispatch = useDispatch();
  const payloads: PayloadsT = useSelector(getPayloads);
  const open = useSelector(getOpenState);
  const rowId = useSelector(getRowIdState);
  const mode = useSelector(getModeState);
  const title = (mode) =>
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
          {payloads[rowId][mode].map((payload, idx) => (
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
