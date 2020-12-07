import React from "react";
import ResultsCard from "./ResultsCard";

const ResultsSection = ({ companyState }) => {
  return (
    <div>
      <h2>RESULTS:</h2>
      <ResultsCard companyState={companyState} />
    </div>
  );
};;

export default ResultsSection;