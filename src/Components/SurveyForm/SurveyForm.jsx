import "./SurveyForm.css";
import { useState } from "react";

function SurveyForm({ activeModal, setActiveModal }) {
  const countryList = [
    "Select One",
    "United States",
    "United Kingdom",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua & Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia & Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre & Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts & Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks & Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const marketRoles = [
    "job seeker",
    "recruiter",
    "hiring manager",
    "business owner",
    "career coach",
  ];

  const writeQuestions = [
    {
      label: "What's Your Experience?",
      question:
        "If you could sum up your experience of the job market / hiring process in a few words, what would they be?",
      placeholder: "Your Experience Here",
      required: false,
    },
    {
      label: "What are Challenges and Heacaches of the Process?",
      question:
        "What do you think are the biggest challenges or headaches in the hiring process?",
      placeholder: "Challenges + Headaches",
      required: true,
    },
    {
      label: "What would you change?",
      question:
        "If you could change anything about the current hiring process, what would it be?",
      placeholder: "What would you change?",
      required: false,
    },
  ];

  const dropdownQuestions = [
    {
      label: "Would you like a conscious, transparent option?",
      question:
        "Do you think you would use a more conscious, transparent, human-focused job board?",
      options: ["", "Heck Yes!", "Yes", "No", "Maybe"],
      required: true,
    },
    {
      label: "How many apps per listing should there be?",
      question:
        "There are current statistics stating an average job listing receives about 250 applications. What do you consider to be the ideal amount of applications per position?",
      options: [
        "",
        "25-50 Applications",
        "Unlimited",
        "250 Sounds Good",
        "Less Than 100",
      ],
      required: false,
    },
    {
      label: "Should users see their application status?",
      question:
        "Do you think it would be helpful if applicants had access to the status of their application?",
      options: ["", "Absolutely!", "Yes", "No", "Perhaps"],
      required: false,
    },
    {
      label: "Should all apps be given a response?",
      question:
        "Do you think it would be beneficial if companies were required to respond to each application?",
      options: ["", "Definitely!", "Yes", "No", "Don't be ridiculous."],
      required: false,
    },
    {
      label: "Do you think 2-3 minimum qualifications is good?",
      question:
        "Do you think it would be helpful if applicants were only allowed to apply to a position where they match 2-3 realistic, quantifiable minimum requirements?",
      options: ["", "Yes", "No", "It Depends"],
      required: false,
    },
    {
      label: "What's your response to Straightforward Job Site?",
      question:
        "What would your response be if this thoughtful job site was focused on helping people more than gaining profits? {ie. leaving the platform ad-free, affordable for businesses, and pay-what-you-want for job-seekers}",
      options: [
        "",
        "That's Amazing! Sign me up!",
        "That may be too good to be true?",
        "I prefer tiered payment options and ads.",
      ],
      required: false,
    },
  ];

  const interestQuestions = [
    {
      label: "Support us via Kickstarter?",
      question: "Would you help support a mission like this via Kickstarter?",
      options: ["I would love to!", "No", "Maybe?"],
      required: true,
    },
    {
      label: "Would you refer + spread the word?",
      question: "Would you refer & help spread the word for an app like this?",
      options: ["Absolutely!", "Absolutely Not", "It Depends"],
      required: false,
    },
    {
      label: "Would you like updates?",
      question: "Would you be interested in receiving updates on this project?",
      options: ["Of course I would!", "No"],
      required: true,
    },
  ];

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
        activeModal === "survey"
          ? "surveyModal surveyModal__opened"
          : "surveyModal"
      }
    >
      <form
        className="surveyForm"
        action="https://submit-form.com/uDuHzE9NU"
        onSubmit={handleSubmit}
      >
        <button className="close-button" onClick={handleClose}></button>
        <h3 className="surveyForm__title darktitle maintitle">
          Job Market Survey
        </h3>
        <label className="required" htmlFor="name">
          Name
        </label>
        <input
          className="general-info"
          type="text"
          id="A Name"
          name="A Name"
          placeholder="Your Name"
          required
        />
        <div className="surveyForm__group">
          <div className="surveyForm__question age">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="Age"
              name="Age"
              placeholder="Your Age"
              className="halfsizeQ ageQ"
            />
          </div>
          <div className="surveyForm__question">
            <label htmlFor="location">Location/Country</label>
            <select className="halfsizeQ" id="location" name="location">
              {countryList.map((country) => {
                return (
                  <option key={country} value={country}>
                    {country}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <label className="required" htmlFor="email">
          Email
        </label>
        <input
          className="general-info"
          type="email"
          id="An Email"
          name="An Email"
          placeholder="Your Email"
          required
        />
        <h3 className="surveyForm__title darktitle">
          General Job Market Questions
        </h3>
        <label
          className="surveyForm__question-title required"
          htmlFor="market-role"
          required
        >
          What is your current role in the job market?
        </label>
        <select
          className="market-role"
          id="market-role"
          name="market-role"
          required
        >
          {marketRoles.map((role) => {
            return (
              <option key={role} value={role}>
                {role}
              </option>
            );
          })}
        </select>
        {writeQuestions.map((question) => {
          return (
            <div key={question.label} className="surveyForm__question">
              <label
                className={
                  question.required == true
                    ? "surveyForm__question-title required"
                    : "surveyForm__question-title"
                }
                htmlFor={question.label}
                required={question.required}
              >
                {question.question}
              </label>
              <textarea
                className="surveyForm__textarea"
                id={question.label}
                name={question.label}
                placeholder={question.placeholder}
                required={question.required == true}
              ></textarea>
            </div>
          );
        })}
        <h3 className="surveyForm__title jobSpecQ__title">
          Job Board Specific Questions
        </h3>

        {dropdownQuestions.map((question) => {
          return (
            <div key={question.label} className="dropdownQuestion">
              <label
                className={
                  question.required == true
                    ? "dropdown__label required"
                    : "dropdown__label"
                }
                htmlFor={question.label}
                required={question.required == true}
              >
                {question.question}
              </label>
              <div className="dropdown">
                <select
                  key={question.label}
                  className="dropdownselect"
                  id={question.label}
                  name={question.label}
                  required={question.required == true}
                >
                  {question.options.map((option) => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          );
        })}

        <h3 className="surveyForm__title darktitle">Interest Questions</h3>
        {interestQuestions.map((question) => {
          return (
            <div key={question.label} className="dropdownQuestion">
              <label
                className={
                  question.required == true
                    ? "dropdown__label interest-label required"
                    : "dropdown__label interest-label"
                }
                htmlFor={question.label}
                required={question.required == true}
              >
                {question.question}
              </label>
              <div className="dropdown-interest">
                <select
                  key={question.label}
                  className="dropdownselect-interest"
                  id={question.label}
                  name={question.label}
                  required={question.required == true}
                >
                  {question.options.map((option) => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          );
        })}
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
          Submit
        </button>
      </form>
    </div>
  );
}

export default SurveyForm;
