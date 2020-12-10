import React, { useState } from "react";
import ResultsCard from "./ResultsCard";

const ResultsSection = ({ companyState, isLoadingState }) => {
  return (
    <div>
      {isLoadingState ? (
        <span className="spinner"></span>
      ) : (
        <ResultsCard companyState={companyState} />
      )}
    </div>
  );
};;

export default ResultsSection;