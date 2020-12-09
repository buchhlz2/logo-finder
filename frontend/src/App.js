import React, { useState, useEffect } from 'react';
import axios from "axios";
import Nav from './components/Nav';
import ResultsSection from "./components/ResultsSection";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [company, setCompany] = useState([]);

  // Search form in frontend sends to backend, which pulls data from Clearbit API
  const search = (searchTerm) => {
    try {
      axios.post("/api/search", {
        company: searchTerm,
      });
      console.log(searchTerm);
      fetchCompanySearchResults();
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch hard-coded data from backend about company info
  // TODO: alter logic on fetching data -- need to refactor loading & fallback when timeout occurs
  // For example, if timeout occurs, the backend breaks because the root cause is no company being found 
  async function fetchCompanySearchResults() {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/company", { timeout: 5000 });
      const data = await response.data.company;
      setCompany(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Nav />
      <Search search={search} />
      <ResultsSection
        companyState={company}
        setCompanyState={setCompany}
        isLoadingState={isLoading}
      />
    </div>
  );
}

export default App;
