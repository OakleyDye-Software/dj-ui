import React, { FunctionComponent } from "react";
import { OptionsObject, useSnackbar, WithSnackbarProps, SnackbarOrigin, SnackbarKey } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

let ref: WithSnackbarProps;
export const SnackbarConfigurator: FunctionComponent = (): JSX.Element => {
    ref = useSnackbar();
    return <></>;
};

const snackBarKeyGet = function () {
    return (Math.random() + 1).toString(36).substring(7);
};

const action = (snackbarId: SnackbarKey | undefined) => (
  <Button
    onClick={() => {
      ref.closeSnackbar(snackbarId);
    }}
  >
    <CloseIcon style={{ color: "#FFFFFF" }} />
  </Button>
);

const origin: SnackbarOrigin = { vertical: "bottom", horizontal: "left" };
const defaultOptions: OptionsObject = {
  anchorOrigin: origin,
  autoHideDuration: 3500,
  key: snackBarKeyGet(),
  action: action,
};

export default {
  success(msg: string, options: OptionsObject = defaultOptions): void {
    this.toast(msg, { ...options, variant: "success" });
  },
  warning(msg: string, options: OptionsObject = defaultOptions): void {
    this.toast(msg, { ...options, variant: "warning" });
  },
  info(msg: string, options: OptionsObject = defaultOptions): void {
    this.toast(msg, { ...options, variant: "info" });
  },
  error(msg: string, options: OptionsObject = defaultOptions): void {
    this.toast(msg, { ...options, variant: "error" });
  },
  toast(msg: string, options: OptionsObject = defaultOptions): void {
    ref.enqueueSnackbar(msg, options);
  },
};