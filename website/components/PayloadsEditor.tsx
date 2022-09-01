/** @format */
import { GridRowId } from "@mui/x-data-grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Delete } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

type ParamsT = {
  open: boolean;
  rowId: GridRowId;
  payload: string[];
  handleClose: () => void;
};

export const PayloadsEditor = (params: ParamsT) => (
  <Dialog open={params.open} onClose={params.handleClose}>
    <DialogTitle>Change Payload #{params.rowId}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        ここに説明を入れられる。書くことないし消すかも。
      </DialogContentText>
      <List>
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
                    <IconButton edge="end">
                      <Delete />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>
        ))}
        <ListItem>＋ここに追加ボタン</ListItem>
      </List>
    </DialogContent>
    <DialogActions>
      <Button onClick={params.handleClose}>Save</Button>
    </DialogActions>
  </Dialog>
);
