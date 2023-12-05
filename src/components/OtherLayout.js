import React, { useState } from 'react';
import { Grid, Typography, Paper, FormControlLabel, Radio, Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material';

  const OtherLayout = ({ onDataChange, lang }) => {
    const [level, setLevel] = useState('');
    const [duration, setDuration] = useState('');
    const [time, setTime] = useState('');
    const [last_used, setLast_used] = useState('');
  
    const handleDataChange = () => {
      const data = {
        selectedLanguage: lang,
        level,
        duration,
        time,
        last_used,
      };
      onDataChange(data); 
    };


  
    const handleLevelChange = (e) => {
      setLevel(e.target.value);
      handleDataChange();
    };
  
    const handleDurationChange = (e) => {
      setDuration(e.target.value);
      handleDataChange();
    };
  
    const handleTimeChange = (e) => {
      setTime(e.target.value);
      handleDataChange();
    };
  
    const handleLastUsedChange = (e) => {
      setLast_used(e.target.value);
      handleDataChange();
    };
  

  return (
    <Grid container spacing={2} style={{ padding: '10px', marginTop: '10px' }}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} style={{ padding: 6, height: 70 }}>
          <Typography variant="subtitle2">Language Name</Typography>
          <FormControlLabel
            sx={{ m: 1, minWidth: 170, '@media (min-width:600px)': { minWidth: '10vw' } }}
            value="female"
            control={<Radio />}
            label={lang}
          />
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} style={{ padding: 6, height: 70 }}>
          <Typography variant="subtitle2">Level</Typography>
          <FormControl
            sx={{ m: 1, minWidth: 170, '@media (min-width:600px)': { minWidth: '10vw' } }}
            size="small"
          >
            <InputLabel id="level-select-label">Level</InputLabel>
            <Select
              labelId="level-select-label"
              id="level-select"
              value={level}
              label="Level"
              // onChange={(e) => setLevel(e.target.value)}
              onChange={handleLevelChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="1">Novice</MenuItem>
              <MenuItem value="2">Intermediate</MenuItem>
              <MenuItem value="3">Advanced</MenuItem>
            </Select>
          </FormControl>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} style={{ padding: 6, height: 70 }}>
          <Typography variant="subtitle2">Duration</Typography>
          <FormControl
            sx={{ m: 1, minWidth: 170, '@media (min-width:600px)': { minWidth: '10vw' } }}
            size="small"
          >
            <InputLabel id="duration-select-label">Duration</InputLabel>
            <Select
              labelId="duration-select-label"
              id="duration-select"
              value={duration}
              label="Duration"
              // onChange={(e) => setDuration(e.target.value)}
              onChange={handleDurationChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>&lt; 1 year</MenuItem>
              <MenuItem value={2}>1 - 3 years</MenuItem>
              <MenuItem value={3}>&gt; 3 years</MenuItem>
            </Select>
          </FormControl>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} style={{ padding: 6, height: 70 }}>
          <Typography variant="subtitle2">Time</Typography>
          <TextField
            id="time-input"
            label="Time"
            variant="outlined"
            size="small"
            sx={{ m: 1, minWidth: 170, '@media (min-width:600px)': { minWidth: '10vw' } }}
            value={time}
            onChange={handleTimeChange}
            inputProps={{
              type: 'text'
            }}
          />
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={3} style={{ padding: 6, height: 70 }}>
          <Typography variant="subtitle2">Last Used</Typography>
          <TextField
            id="last-used-date"
            label="Last Used"
            type="date"
            size="small"
            sx={{ m: 1, minWidth: 170, '@media (min-width:600px)': { minWidth: '10vw' } }}
            InputLabelProps={{
              shrink: true,
            }}
            value={last_used || ''}
            onChange={handleLastUsedChange}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default OtherLayout;
