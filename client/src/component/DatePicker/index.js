import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
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

    // if (this.state.redirect) {
    //   return ;
    // }
    // return this.setState({ redirect: "/journalsdisp" });

    // add filter data for matchign date
  };

  return redirect ? <Redirect to="/journalsdisp" />:(
    <form className={classes.container} noValidate>
      <TextField
        onChange={(event) => setDate(event.target.value)}
        id="date"
        label="Entry Date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <DateSubmit handleSubmit={handleSubmit} />
    </form>
  );
}
