import React from "react";

export const AddContact = ({
  onSubmit,
  name,
  secondName,
  email,
  setName,
  setSecondName,
  setEmail,
  errorShown,
  setForm,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-fields-wrapper">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Second Name</label>
        <input
          type="text"
          placeholder="Second Name"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {errorShown && <p className="error-msg">Fill in all the fields</p>}
        <input className="btn" type="submit" value="Add" />
      </div>

      <p className="add-contact error-msg" onClick={setForm}>
        ▲ Hide form
      </p>
    </form>
  );
};
