import React from 'react';

const Message = ({
  createdAt = null,
  text = '',
  displayName = '',
  photoURL = '',
}) => {
  if (!text) return null;
  return (
    <div>
      <div>
        {photoURL ? (
          <img src={photoURL} alt="Avatar" width={45} height={45} />
        ) : null}
      </div>
      <div>{displayName ? <p>{displayName}</p> : null}</div>
      <p>{text}</p>
    </div>
  );
};

//TO FORMAT THE MESSAGE

export default Message;
