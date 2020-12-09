import React, { useState, useEffect } from 'react';
import axios from "axios";
import Nav from './components/Nav';
import ResultsSection from "./components/ResultsSection";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [company, setCompany] = useState([]);
  
  // Search form in frontend sends to backend, which pulls data from Clearbit API
  const search = searchTerm => {
    try {
      axios.post("/api/search", {
        company: searchTerm
      });
      console.log(searchTerm);
      fetchCompanySearchResults();
    } catch (err) {
      console.log(err);
    }
  }
  
  // Fetch hard-coded data from backend about company info
  // TODO: alter logic on fetching data -- e.g., no need to load on startup but when searched
  async function fetchCompanySearchResults() {
    try {
      const response = await axios.get("/api/company");
      const data = await response.data.company;
      setCompany(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Nav />
      <Search search={search}  />
      {loading ? (
        <span>Loading...</span>
      ) : (
        <ResultsSection companyState={company} setCompanyState={setCompany} />
      )}
    </div>
  );
}

export default App;
