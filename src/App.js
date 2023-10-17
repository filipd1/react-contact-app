import { ContactCard } from "./components/ContactCard";
import { AddContact } from "./components/AddContact";
import { Header } from "./components/Header";
import { useState } from "react";
import { MobileMenu } from "./components/MobileMenu";
// import { Routes, BrowserRouter, Route } from "react-router-dom";
// import { ContactPage } from "./pages/ContactPage";
// import { NoPage } from "./pages/NoPage";

function App() {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: "Adam",
      secondName: "Małysz",
      email: "amalysz12@gmail.com",
    },
    {
      id: 2,
      name: "Jane",
      secondName: "Ahonen",
      email: "jahonen123@gmail.com",
    },
  ]);

  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [errorShown, setErrorShown] = useState(false);
  const [mobileMenuShown, setMobileMenuShown] = useState(false);
  const [formShown, setFormShown] = useState(false);

  const deleteContact = (id) => {
    const newContactList = contactList.filter((contact) => {
      return contact.id !== id;
    });
    setContactList(newContactList);
  };

  const addContact = (e) => {
    e.preventDefault();
    if (!name || !secondName || !email) setErrorShown(true);
    else {
      setContactList((contacts) => {
        return [
          ...contacts,
          {
            id: crypto.randomUUID(),
            name: name,
            secondName: secondName,
            email: email,
          },
        ];
      });
      setErrorShown(false);
      setName("");
      setSecondName("");
      setEmail("");
    }
  };

  const handleForm = () => {
    setFormShown((prevState) => !prevState);
    setMobileMenuShown(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuShown((prevState) => !prevState);
  };

  return (
    <div className="container">
      <Header title="Contacts" onClick={toggleMobileMenu} />
      {mobileMenuShown && (
        <MobileMenu onExitMenu={toggleMobileMenu} setForm={handleForm} />
      )}
      {contactList == "" ? (
        <p className="no-contacts-msg">
          No contacts found
          <span className="underline" onClick={handleForm}>
            {" "}
            Add Contacts
          </span>
        </p>
      ) : (
        contactList.map((contact) => {
          return (
            <ContactCard
              key={contact.id}
              contact={contact}
              onClick={() => deleteContact(contact.id)}
            />
          );
        })
      )}
      {formShown && (
        <AddContact
          onSubmit={addContact}
          name={name}
          secondName={secondName}
          email={email}
          setName={setName}
          setSecondName={setSecondName}
          setEmail={setEmail}
          errorShown={errorShown}
          setForm={() => setFormShown(false)}
        />
      )}
    </div>
  );
}

export default App;
