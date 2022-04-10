import { Paper, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup, TextField, Button, Typography, Checkbox } from '@mui/material';
import Axios from 'axios';
import React from 'react';
import { Navigate } from 'react-router-dom';

function FormRadio(label, radioId, radioName, labelBy) {
//returns eanumbers from 1-5 for the radio buttons that will be used for each symptom
return(
  <FormControl>
    <FormLabel sx={{ mb: 3 }}>
      {label}
    </FormLabel>

    <RadioGroup row aria-labelledby={labelBy} defaultValue="top" sx={{ mb: 5 }} id={radioId} name={radioName}>
      <FormControlLabel value="1" control={<Radio required={true} />} label="No" labelPlacement="top" required/>
      <FormControlLabel value="2" control={<Radio required={true} />} labelPlacement="top" sx={{ mr: 3 }}/>
      <FormControlLabel value="3" control={<Radio required={true} />} labelPlacement="top" sx={{ mr: 3 }}/>
      <FormControlLabel value="4" control={<Radio required={true} />} labelPlacement="top" sx={{ mr: 3 }}/>
      <FormControlLabel value="5" control={<Radio required={true} />} label="Yes" labelPlacement="top" />
    </RadioGroup>
  </FormControl>
)
}


function Questionaire() {
  //symptoms we are tracking
  const storedLabels = ["Was the Game Intuitive?", "Did you enjoy the game?", "Were the instructions clear?", "Do you find this game relevant to Computer Science?", "Will you come back tomorrow?"]
  const nameIDs = ["Intuitive", "Enjoyment", "Instructions", "Relevance", "Retention"]
  //getting data from form
  let Intuitive = FormRadio(storedLabels[0], nameIDs[0], nameIDs[0], nameIDs[0])
  let Enjoyment = FormRadio(storedLabels[1], nameIDs[1], nameIDs[1], nameIDs[1])
  let Instructions = FormRadio(storedLabels[2], nameIDs[2], nameIDs[2], nameIDs[2])
  let Relevance = FormRadio(storedLabels[3], nameIDs[3], nameIDs[3], nameIDs[3])
  let Retention = FormRadio(storedLabels[4], nameIDs[4], nameIDs[4], nameIDs[4])
  return (
    <>
        <div align="Center">
        <Paper elevation={5} component="form" sx={{ width: 700, height: 1300, mt: "60rem", pt: '2%'}}>
          <Typography component="h2" variant="h2" >
            Game Questionaire
          </Typography>

          <br></br>

          <br></br>
          {/* Displaying the radio buttons for all the remaining symptoms */}
          {Intuitive}
          {Enjoyment}
          {Instructions}
          {Relevance}
          {Retention}

            <br/>
            <br/>
            <br/>
            <br/>
          <div>
            {/* Box for any comments */}
            <FormControl>
              <FormLabel id="symptoms" sx={{ mb: 3 }}>Any Additional Comments (Optional)?</FormLabel>
              <TextField id="symptoms" multiline rows={4} label="Enter Any Other comments Here" variant="filled" name="symptoms" sx={{ width: 350 }}/>
            </FormControl>
          </div>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
        </Paper>
      </div>
    </>
  );
}

export default Questionaire;
