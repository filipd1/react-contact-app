import React from "react";
import { Header } from "../components/Header";
import { MobileMenu } from "../components/MobileMenu";

export const ContactPage = ({
  mobileMenuShown,
  toggleMobileMenu,
  handleForm,
}) => {
  return (
    <>
      <Header title="Contact Page" />
      {mobileMenuShown && (
        <MobileMenu onExitMenu={toggleMobileMenu} setForm={handleForm} />
      )}
    </>
  );
};
