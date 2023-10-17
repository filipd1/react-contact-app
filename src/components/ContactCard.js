import React from "react";
import user from "../images/user.png";

export const ContactCard = ({ contact, onClick, contactKey }) => {
  return (
    <div className="card" key={contactKey}>
      <img src={user} alt={contact.secondName} className="avatar" />

      <div className="card-text-wrapper">
        <p className="card-text">
          {contact.name} {contact.secondName}
        </p>
        <p className="card-text email">{contact.email}</p>
      </div>
      <p className="card-delete" onClick={onClick}>
        X
      </p>
    </div>
  );
};
