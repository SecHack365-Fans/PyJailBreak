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

type ParamsT = {
  open: boolean;
  rowId: GridRowId;
  payload: string[];
  handleClose: () => void;
};

export const PayloadsEditor = (params: ParamsT) => {
  const [newPayload, setNewPayload] = React.useState("");
  const dispatch = useDispatch();
  const payloads: PayloadsT = useSelector(getPayloads);
  return (
    <Dialog open={params.open} onClose={params.handleClose}>
      <DialogTitle>Change Payload #{params.rowId}</DialogTitle>
      <DialogContent>
        <List>
          {/* TODO: Scroll */}
          {params.payload.map((payload, idx) => (
            <ListItem>
              <TextField
                label={`Payload ${idx}`}
                value={payload}
                fullWidth
                variant="standard"
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => {
                          const newPayloads = [
                            ...payloads.slice(0, params.rowId as number),
                            {
                              ...payloads[params.rowId as number],
                              payload: [
                                ...payloads[
                                  params.rowId as number
                                ].payload.slice(0, idx),
                                ...payloads[
                                  params.rowId as number
                                ].payload.slice(idx + 1),
                              ],
                            },
                            ...payloads.slice((params.rowId as number) + 1),
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
                        let newPayloads = [
                          ...payloads.slice(0, params.rowId as number),
                          {
                            ...payloads[params.rowId as number],
                            payload: payloads[
                              params.rowId as number
                            ].payload.concat([newPayload]),
                          },
                          ...payloads.slice((params.rowId as number) + 1),
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
        <Button onClick={params.handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
