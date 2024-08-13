import "./KickstarterForm.css";
import { useState } from "react";

function KickstarterForm({ activeModal, setActiveModal }) {
  const [clickedButton, setClickedButton] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault;
    console.log("form submitted");
    setClickedButton("submit");
    setTimeout(() => {
      unClick();
    }, 250);
  };

  const handleClose = () => {
    console.log("close button clicked");
    setActiveModal("");
  };

  const unClick = () => {
    setClickedButton("");
  };

  return (
    <div
      className={
        activeModal === "kickstarter" ? "modal modal__opened" : "modal"
      }
    >
      <form
        className="kickstarterForm"
        action="https://submit-form.com/6VylXtylq"
        onSubmit={handleSubmit}
      >
        <button className="close-button" onClick={handleClose}></button>
        <h3 className="kickstarterForm__title darktitle maintitle">
          Sign Up for Straightforward Job Site's Progress + Crowdfunding Updates
        </h3>
        <p className="kickstarterForm__subtitle">{`{we'll send you updates on our progress and notify you when our crowdfunding campaign goes live, while respecting your time + inbox}`}</p>
        <label className="required" htmlFor="name">
          Name
        </label>
        <input
          className="general-info"
          type="text"
          id="A Name"
          name="A Name"
          placeholder="Fantastic Mr. Fox"
          required
        />
        <label className="required" htmlFor="email">
          Email
        </label>
        <input
          className="general-info"
          type="email"
          id="An Email"
          name="An Email"
          placeholder="fantasticmrfox@burrow.com"
          required
        />
        <input
          type="hidden"
          name="_redirect"
          value="http://straightforwardjobsite.com"
        />
        <button
          className={
            clickedButton === "submit"
              ? "form-submit-button buttonPress clickButton"
              : "form-submit-button"
          }
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default KickstarterForm;
