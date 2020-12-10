import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const ResultsCard = ({ companyState }) => {
  Number.prototype.format = function (n, x) {
    var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
  };

  const  months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

  return (
    <div className="results-card">
      {companyState.length === 0 ? (
        <h2>Could not find company info.</h2>
      ) : (
        <div>
          {companyState.name && <h2>{companyState.name}</h2>}
          {companyState.description && <p>{companyState.description}</p>}
          <div className="results-card-logo">
            <img src={companyState.logo} alt={companyState.description} />
          </div>
          <ul className="results-card-list">
            {companyState.facebook.handle && (
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
            )}
            {companyState.linkedin.handle && (
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
            )}
            {companyState.twitter.handle && (
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
            )}
          </ul>
          <h3 className="table-divider-header">Basics</h3>
          <div className="divider"></div>
          <table className="results-card-table">
            <tr>
              {companyState.domain && <th>Website</th>}
              {companyState.foundedYear && <th>Founded</th>}
              {companyState.metrics.employees && <th>Employees</th>}
              {companyState.metrics.employees && <th>Industry</th>}
            </tr>
            <tr>
              {companyState.domain && (
                <td>
                  <a
                    href={`https://${companyState.domain}`}
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    {companyState.domain}
                  </a>
                </td>
              )}
              {companyState.foundedYear && <td>{companyState.foundedYear}</td>}
              {companyState.metrics.employees && (
                <td>{companyState.metrics.employees.format()}</td>
              )}
              {companyState.industry && <td>{companyState.industry}</td>}
            </tr>
          </table>
          <h3 className="table-divider-header">Financials</h3>
          <div className="divider"></div>
          <table className="results-card-table">
            <tr>
              {companyState.metrics.marketCap && <th>Market Cap</th>}
              {companyState.metrics.annualRevenue ? (
                <th>Annual Rev.</th>
              ) : (
                companyState.metrics.estimatedAnnualRevenue && (
                  <th>Est. Annual Rev.</th>
                )
              )}
              {companyState.metrics.fiscalYearEnd && <th>FY End</th>}
            </tr>
            <tr>
              {companyState.metrics.marketCap && (
                <td>${companyState.metrics.marketCap.format()}</td>
              )}
              {companyState.metrics.annualRevenue ? (
                <td>${companyState.metrics.annualRevenue.format()}</td>
              ) : (
                companyState.metrics.estimatedAnnualRevenue && (
                  <td>{companyState.metrics.estimatedAnnualRevenue}</td>
                )
              )}
              {companyState.metrics.fiscalYearEnd && (
                <td>{months[companyState.metrics.fiscalYearEnd - 1]}</td>
              )}
            </tr>
          </table>
          <h3 className="table-divider-header">Miscellaneous</h3>
          <div className="divider"></div>
          <table className="results-card-table">
            <tr>
              {companyState.ticker && <th>Ticker</th>}
              {companyState.metrics.raised && <th>Funding</th>}
              {companyState.crunchbase && <th>Crunchbase</th>}
              {companyState.tags && <th>Tags</th>}
            </tr>
            <tr>
              {companyState.ticker && (
                <td>
                  $
                  <a
                    href={`https://finance.yahoo.com/quote/${companyState.ticker}`}
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    {companyState.ticker}
                  </a>
                </td>
              )}
              {companyState.metrics.raised && (
                <td>${companyState.metrics.raised.format()}</td>
              )}
              {companyState.crunchbase && (
                <td>
                  <a
                    href={`https://www.crunchbase.com/${companyState.crunchbase}`}
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                </td>
              )}
              {companyState.tags && (
                <td>
                  {companyState.tags.map((tag, i) => (
                    <span key={i} className="results-card-tag">
                      {(i ? ", " : "") + tag}
                    </span>
                  ))}
                </td>
              )}
            </tr>
          </table>
        </div>
      )}
    </div>
  );
};

export default ResultsCard;
