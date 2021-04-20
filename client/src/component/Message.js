import React from 'react';
import { formatRelative } from 'date-fns';

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
const Message = ({ createdAt, text = '', displayName = '', photoURL = '' }) => {
  if (!text) return null;
  return (
    <div>
      {' '}
      {photoURL ? (
        <img src={photoURL} alt="Avatar" width={45} height={45} />
      ) : null}
      <div>
        <div>
          <p>{displayName}</p>
          <span>{formatDate(new Date(createdAt.seconds * 1000))}</span>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

//TO FORMAT THE MESSAGE

export default Message;
