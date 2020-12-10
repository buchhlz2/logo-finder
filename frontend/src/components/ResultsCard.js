import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const ResultsCard = ({ companyState }) => {
  return (
    <div className="results-card">
      {companyState.length === 0 ? (
        <h2>Could not find company info.</h2>
      ) : (
        <div>
          <h2>{companyState.name}</h2>
          <p>{companyState.description}</p>
          <div className="results-card-logo">
            <img src={companyState.logo} alt={companyState.description} />
          </div>
          <ul className="results-card-list">
            <li>
              <a
                href={`https://${companyState.domain}`}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Website
              </a>
            </li>
            <li>
              <a
                href={`https://www.facebook.com/${companyState.facebook.handle}`}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="results-card-list-icon"
                />
              </a>
            </li>
            <li>
              <a
                href={`https://www.linkedin.com/${companyState.linkedin.handle}`}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="results-card-list-icon"
                />
              </a>
            </li>
            <li>
              <a
                href={`https://www.twitter.com/${companyState.twitter.handle}`}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  className="results-card-list-icon"
                />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResultsCard;
