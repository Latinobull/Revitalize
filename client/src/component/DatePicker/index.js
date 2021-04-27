import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import DateSubmit from "../Journals/DateSubmit";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePicker() {
  const classes = useStyles();

  const [date, setDate] = useState("");

  const [redirect, setRedirect] = useState(false);

  const handleSubmit = () => {
    setRedirect(true);
  };

  return redirect ? (
    <Redirect to="/journalsdisp" />
  ) : (
    <DateSubmit handleSubmit={handleSubmit} />
  );
}
