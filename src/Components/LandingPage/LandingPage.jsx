import "./LandingPage.css";
import logo from "../../images/SFJSLogo.svg";
import { useState } from "react";
import SurveyForm from "../SurveyForm/SurveyForm";
import KickstarterForm from "../KickstarterForm/KickstarterForm";

function LandingPage() {
  const stepsAndStandards = [
    "Simplicity, honesty, and transparency in listings, to be clear what positions are, actually need, and offer",
    "Pay-What-You-Want for all job searchers",
    "Applications accepted in rounds, to keep recruiters from being overwhelmed and applicants falling through the cracks",
    "Higher standards for job postings: the job exists, is actively looking, and ready to hire",
    "2-3 Non-negotiable parameters required for submitting applications - this is used to limit time wasted sorting through ones that don’t meet minimum requirements.",
    "Tracking of applications to let applicants know the status of their application, how many people’s applications are being processed, and where they are in line - to offer realistic expectations for applicants and accountability for businesses.",
    "Accountability for recruiters through requiring a response to each application.",
    "Focus on facilitating interviews right away for faster job placement and more human connection in the process.",
  ];

  const [clickedButton, setClickedButton] = useState("");
  const [followMenu, setFollowMenu] = useState("closed");
  const [followClickedButton, setFollowClickedButton] = useState("");
  const [activeModal, setActiveModal] = useState("");

  console.log(followMenu);

  const handleFollowClick = () => {
    console.log("follow button clicked");
    setClickedButton("follow");
    setFollowMenu("open");
    setTimeout(() => {
      unClick();
    }, 250);
  };

  const handleFollowUnClick = () => {
    setClickedButton("follow");
    setFollowMenu("closed");
    setTimeout(() => {
      unClick();
    }, 250);
  };

  const handleSurveyClick = () => {
    setClickedButton("survey");
    setTimeout(() => {
      // window.open("https://form.jotform.com/241651627129154", "_blank");
      setActiveModal("survey");
      unClick();
    }, 500);
  };

  const handleSupportClick = () => {
    setClickedButton("support");
    setActiveModal("kickstarter");
    setTimeout(() => {
      unClick();
    }, 500);
  };

  const handleScrollClick = () => {
    setClickedButton("scroll");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      unClick();
    }, 500);
  };

  const handleInstagramClick = () => {
    setFollowClickedButton("instagram");
    //https://www.instagram.com/straightforward_job_site/
    setTimeout(() => {
      window.open(
        "https://www.instagram.com/straightforward_job_site/",
        "_blank"
      );
      unClickFollowButton();
    }, 500);
  };

  const handleTikTokClick = () => {
    setFollowClickedButton("tiktok");
    //https://www.tiktok.com/@straightforwardjo?_t=8o8JGbQzle4&_r=1
    setTimeout(() => {
      window.open(
        "https://www.tiktok.com/@straightforwardjo?_t=8o8JGbQzle4&_r=1",
        "_blank"
      );
      unClickFollowButton();
    }, 500);
  };

  const handleLinkedinClick = () => {
    setFollowClickedButton("linkedin");
    //https://www.linkedin.com/company/straightforward-job-site/
    setTimeout(() => {
      window.open(
        "https://www.linkedin.com/company/straightforward-job-site/",
        "_blank"
      );
      unClickFollowButton();
    }, 500);
  };

  const unClick = () => {
    setClickedButton("");
  };

  const unClickFollowButton = () => {
    setFollowClickedButton("");
  };

  return (
    <div className="landingPage">
      <img
        src={logo}
        alt="Straightforward Job Site Logo"
        className="landingPage__logo"
      />
      <SurveyForm activeModal={activeModal} setActiveModal={setActiveModal} />
      <div className="landingPage__main-info">
        <div className="landingPage__buttons">
          {/* <a href="https://form.jotform.com/241651627129154" target="_blank"> */}
          <button
            onClick={clickedButton === "survey" ? unClick : handleSurveyClick}
            className={
              clickedButton === "survey"
                ? "buttonPress clickButton landingPage__button survey-button"
                : "landingPage__button survey-button"
            }
          >
            fill out our survey
          </button>
          {/* </a> */}
          <button
            onClick={
              followMenu === "open" ? handleFollowUnClick : handleFollowClick
            }
            className={
              clickedButton === "follow"
                ? "buttonPress clickButton landingPage__button follow-button"
                : "landingPage__button follow-button"
            }
          >
            connect on socials
          </button>
          {followMenu === "open" ? (
            <div className="follow__buttons">
              <button
                onClick={
                  followClickedButton === "instagram"
                    ? unClickFollowButton
                    : handleInstagramClick
                }
                className={
                  followClickedButton === "instagram"
                    ? "buttonPress clickButton follow__button instagram"
                    : "follow__button instagram"
                }
              ></button>
              <button
                onClick={
                  followClickedButton === "tiktok"
                    ? unClickFollowButton
                    : handleTikTokClick
                }
                className={
                  followClickedButton === "tiktok"
                    ? "buttonPress clickButton follow__button tiktok"
                    : "follow__button tiktok"
                }
              ></button>
              <button
                onClick={
                  followClickedButton === "linkedin"
                    ? unClickFollowButton
                    : handleLinkedinClick
                }
                className={
                  followClickedButton === "linkedin"
                    ? "buttonPress clickButton follow__button linkedin"
                    : "follow__button linkedin"
                }
              ></button>
            </div>
          ) : (
            ""
          )}

          <button
            id="kickstarter"
            onClick={clickedButton === "support" ? unClick : handleSupportClick}
            className={
              clickedButton === "support"
                ? "buttonPress clickButton landingPage__button kickstarter-button"
                : "landingPage__button kickstarter-button"
            }
          >
            follow our crowdfunding campaign
          </button>
        </div>
        <h3 className="landingPage__info">
          coming soon: a job board & application platform that utilizes
          simplicity & human communication to make job searching, recruiting, &
          hiring better for everyone.
        </h3>
      </div>
      <button className="landingPage__button landingPage__scroll-button">
        scroll to read about what makes us different
      </button>

      {/* <div
        style={{ textAlign: "left" }}
        className="sender-form-field"
        data-sender-form-id="lyt43m0sdnzopddla0c"
      ></div> */}

      <div className="landingPage__steps-and-standards">
        <h3 className="ss__title">our steps & standards:</h3>
        <div className="ss__details">
          {stepsAndStandards.map((step) => {
            return (
              <p key={step} className="ss__detail">
                {step}
              </p>
            );
          })}
        </div>
      </div>
      <p className="ss__comment" onClick={handleInstagramClick}>
        Want to see behind the scenes + learn more? Follow us on Instagram!
      </p>
      <button
        onClick={clickedButton === "scroll" ? unClick : handleScrollClick}
        className={
          clickedButton === "scroll"
            ? "buttonPress clickButton landingPage__scroll-up-button"
            : "landingPage__scroll-up-button"
        }
      ></button>
      <p className="landingPage__copyright">©2024, Straightforward Job Site</p>
      <KickstarterForm
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
    </div>
  );
}

export default LandingPage;
