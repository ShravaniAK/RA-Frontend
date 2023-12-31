
import React, { useContext, useState } from "react";

import { Box, Container, Grid, ButtonGroup, Typography } from "@mui/material";


import Layout from "../../components/Layout";
import Button from '@mui/material/Button';
import { useEffect } from "react";
import OtherLayout from "../../components/OtherLayout";

import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const Experiment = () => {
  const [ffuid, setFfuid] = useState(null);
  const [plang, setPlang] = React.useState(null);
  const [level, setLevel] = React.useState('');
  const [strtime, setStrTime] = React.useState(0);
  const [last_used, setLast_used] = React.useState('');
  const [duration, setDuration] = React.useState('');
  

  const API_BASE_URL = process.env.REACT_APP_API;

  // const programming_language = "2";

  //console.log(level);
  const navigate = useNavigate();


  

  const [selectedLanguage, setSelectedLanguage] = useState();
  // useEffect(() => {
  //   fetch('https://assesment-web.onrender.com/expertise/')
  //       .then(res => {
  //           return res.json();
  //       })
  //       .then(dta => {
  //           console.log(dta);
  //           setPlang(dta);
  //       })
  //       const data = [
  //         { name: 'C++', value: '1' },
  //         { name: 'Python', value: '2' },
  //         { name: 'Javascript', value: '3' },
  //       ];
  //       setPlang(data);
  //     }, []);


  // if(plang != null) {
  //   //if(plang[0].programming_language === 1) {
      // plang[0].programming_language = "1";
  // }
  //console.log(levName);
  const handleLanguageSelect = (language) => {
    let value;
    switch (language) {
      case 'C++':
        value = '2';
        break;
      case 'Python':
        value = '1';
        break;
      case 'JavaScript':
        value = '3';
        break;
      default:
        value = '';
        break;
    }
    setSelectedLanguage(value);
  };

  const handleLevel = (newLev) => {
    setLevel(newLev);
  }
  const handleDuration = (newDur) => {
    setDuration(newDur);
  }
  const handleTime = (newTime) => {
    setStrTime(newTime);
  }
  const handleDate = (newDate) => {
    setLast_used(newDate);
  }

  const time = parseInt(strtime);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const expertiseData = { selectedLanguage, level, duration, time, last_used };
    const emptyData = { ffuid: null, ffqbid: null };
    emptyData.ffuid = localStorage.getItem('user_id');

    console.log(expertiseData);
    try {
      await fetch(`${API_BASE_URL}/expertise/?ffuid=${emptyData.ffuid}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expertiseData)
      });
      console.log('Expertise data submitted successfully.');

      const evaluationInitResponse = await fetch(`${API_BASE_URL}/evaluation/?ffuid=${emptyData.ffuid}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emptyData)
      });

      if (evaluationInitResponse.ok) {
        const evaluationInitData = await evaluationInitResponse.json();
        const { evaluation_id } = evaluationInitData; 
        console.log(evaluationInitData);
        if (evaluation_id) {
          localStorage.setItem('evaluation_id', evaluation_id);
          console.log('Evaluation initialized with evaluation ID:', evaluation_id);
          navigate("/level/Easy");
        } else {
          console.error('Evaluation ID not found');
          alert('Evaluation ID not found.');
        }
      } else {
        console.error('Error initializing evaluation:', evaluationInitResponse.status);

      }
    } catch (error) {
      console.error('Error during initialization:', error);

    }
  };

  
  return (
    <>

      <Container maxWidth="lg" style={{minHeight:"240vh"}}>

        <Box sx={{
          width: '100%',
          height: "100%",
          border: 0,
          margin: "2rem 0",
          borderRadius: '16px',

          bgcolor: 'info.main',
          padding: "5px"
        }} >


          <Typography variant="h4" component="h2" marginLeft={2} marginTop={3} color="common.white">

            Experimental Language
          </Typography>



          {/* <ButtonGroup>
        <Button onClick={() => handleLanguageSelect("1")}>C++</Button>
        <Button onClick={() => handleLanguageSelect("2")}>Python</Button>
        <Button onClick={() => handleLanguageSelect("3")}>JavaScript</Button>
      </ButtonGroup> */}

          <Layout
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageSelect}
            level={level}
            onChangeLevel={handleLevel}
            duration={duration}
            onChangeDuration={handleDuration}
            time={strtime}
            onChangeTime={handleTime}
            last_used={last_used}
            onChangeDate={handleDate}
          />





          {/* </Box> */}


          {/* <Box sx={{
        width: '100%',
        height: 600,
        border: 0,
        margin: "2rem 0",
        borderRadius: '16px',
        
        bgcolor: 'info.main',
        padding: "5px"
      }} > */}


         



          {/* <Layout lang="Java"></Layout>

        <Layout lang="Python"></Layout>

        <Layout lang="C"></Layout>

        <Layout lang="Javascript"></Layout> */}


         




          {/* </Box>






      <Box sx={{
        display:"flex",
        justifyContent: 'center',
        
        width: '100%',
        height: 40,
        border: 0,
        margin: "2rem 0",
        borderRadius: '16px',
        // bgcolor:"info.main",
        
        padding: "5px",
        
      }} > */}

          <div className="btns" style={{ margin: '2.4rem' }}>
           

            <Button variant="contained" color="success" size="large" sx={{ ml: 2 }} onClick={handleSubmit} >Next</Button>
           
            {/* </Link> */}
          </div>


        </Box>





      </Container>


    </>

  );


}

export default Experiment;