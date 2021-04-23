import React from 'react';
import { formatRelative } from 'date-fns';
import { Grid, ListItemText } from '@material-ui/core';

const formatDate = date => {
  let formattedDate = '';
  if (date) {
    // Convert the date in words relative to the current date
    formattedDate = formatRelative(date, new Date());
    // Uppercase the first letter
    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  return formattedDate;
};
const Message = ({ createdAt, text = '', displayName = '' }) => {
  if (!text) return null;
  return (
    <div>
      {' '}
      <Grid container>
        <Grid item xs={12}>
          <ListItemText align="right" primary={text}></ListItemText>
          <Grid item xs={12}>
            <ListItemText align="right" secondary={displayName}></ListItemText>
            {createdAt && (
              <ListItemText
                align="right"
                secondary={formatDate(new Date(createdAt.seconds * 1000))}
              ></ListItemText>
            )}
          </Grid>
        </Grid>
      </Grid>
      <br />
    </div>
  );
};

//TO FORMAT THE MESSAGE

export default Message;
