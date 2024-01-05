import React, { useState } from 'react';
import './MyForm.css'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
const languages = ['c++', 'java', 'javascript', 'ruby', 'Go', 'Python'];
const levels = ['Beginner', 'Intermediate', 'Advanced'];
const durations = ['< 1 year', '1 - 3 years', '> 3 years'];

const API_BASE_URL = process.env.REACT_APP_API;

const OtherLayoutPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [level, setLevel] = useState('');
  const [duration, setDuration] = useState('');
  const [time, setTime] = useState(0);
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = { selectedLanguage, level, duration, time, date };
    const emptyData = { ffuid: null, ffqbid: null };
    emptyData.ffuid = localStorage.getItem('user_id');

    console.log(Data);
    try {
      await fetch(`${API_BASE_URL}/language/?ffuid=${emptyData.ffuid}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Data)
      });
      console.log('data submitted successfully.');
    } catch (error) {
      console.error('Error submitting expertise data:', error);
    }
  };

  
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="languageSelect">Language:</label>
      <select id="languageSelect" value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
        <option value="">Select a language</option>
        {languages.map((language, index) => (
          <option key={index} value={index+1}>
            {language}
          </option>
        ))}
      </select>

      <label htmlFor="levelSelect">Level:</label>
      <select id="levelSelect" value={level} onChange={(e) => setLevel(e.target.value)}>
        <option value="">Select level</option>
        {levels.map((level, index) => (
          <option key={index} value={index + 1}>
            {level}
          </option>
        ))}
      </select>

      <label htmlFor="durationSelect">Duration:</label>
      <select id="durationSelect" value={duration} onChange={(e) => setDuration(e.target.value)}>
        <option value="">Select duration</option>
        {durations.map((duration, index) => (
          <option key={index} value={index+1}>
            {duration}
          </option>
        ))}
      </select>

      <label htmlFor="timeInput">Time:</label>
      <input type="text" id="timeInput" value={time} onChange={(e) => setTime(e.target.value)}  />


      <label htmlFor="dateInput">Date:</label>
      <input type="date" id="dateInput" value={date} onChange={(e) => setDate(e.target.value)} />

      <button type="submit">Submit</button>

      {/* <Link to={'/register'} style={{ textDecoration: 'none' }}>
        <Button variant="contained" size="large" color="secondary" sx={{ mr: 2 }}>
          Back
        </Button>
      </Link> */}
      <Link to={'/expertise'} style={{ textDecoration: 'none' }}>
        <Button variant="contained" size="large" color="secondary" sx={{ mr: 2 }}>
       Next
        </Button>
      </Link>
    </form>



  );
};

export default OtherLayoutPage;
