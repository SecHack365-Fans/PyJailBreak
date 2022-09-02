/** @format */

import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
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
import { getOpenState, getRowIdState } from "../models/payloadsDialogSlice";

type ParamsT = {
  handleClose: (rowId: GridRowId) => void;
};

// TODO: refactor onClick, onChange
export const PayloadsEditor = (params: ParamsT) => {
  const [newPayload, setNewPayload] = React.useState("");
  const dispatch = useDispatch();
  const payloads: PayloadsT = useSelector(getPayloads);
  const open = useSelector(getOpenState);
  const rowId = useSelector(getRowIdState);
  return (
    <Dialog
      open={open}
      onClose={() => {
        setNewPayload("");
        params.handleClose(rowId);
      }}
    >
      <DialogTitle>Change Payload #{rowId}</DialogTitle>
      <DialogContent>
        <List>
          {/* TODO: Scroll */}
          {payloads[rowId].payload.map((payload, idx) => (
            <ListItem key={idx}>
              <TextField
                label={`Payload ${idx}`}
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
                        ...payloads[rowId].payload.slice(0, idx),
                        e.target.value,
                        ...payloads[rowId].payload.slice(idx + 1),
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
                              payload: [
                                ...payloads[rowId].payload.slice(0, idx),
                                ...payloads[rowId].payload.slice(idx + 1),
                              ],
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
              label="Add new payload"
              value={newPayload}
              onChange={(e) => setNewPayload(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => {
                        if (newPayload == "") return;
                        let newPayloads = [
                          ...payloads.slice(0, rowId as number),
                          {
                            ...payloads[rowId],
                            payload: payloads[rowId].payload.concat([
                              newPayload,
                            ]),
                          },
                          ...payloads.slice((rowId as number) + 1),
                        ];
                        dispatch(setPayloads(newPayloads));
                        setNewPayload("");
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
      <DialogActions>
        <Button
          onClick={() => {
            setNewPayload("");
            params.handleClose(rowId);
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
