import React from "react";

const ResultsCard = ({ companyState }) => {
  // TODO: need to alter how "Could not find company info." is displayed
  // Currently, it is shown regardless of if a search is made -- maybe move this aspect to ResultsSection
  return (
    <div>
      {companyState.length === 0 ? (
        <h2>Could not find company info.</h2>
      ) : (
        <ul>
          <li>
            <img src={companyState.logo} alt={companyState.description} />
          </li>
          <li>
            <a
              href={`https://${companyState.domain}`}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              {companyState.name}
            </a>
          </li>
          <li>
            <p>{companyState.description}</p>
          </li>
          <li>
            <a
              href={`https://www.facebook.com/${companyState.facebook.handle}`}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              FACEBOOK
            </a>
          </li>
          <li>
            <a
              href={`https://www.linkedin.com/${companyState.linkedin.handle}`}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`https://www.twitter.com/${companyState.twitter.handle}`}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ResultsCard;
