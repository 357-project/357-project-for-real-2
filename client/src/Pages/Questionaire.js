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
      <FormControlLabel value="1" control={<Radio required={true} />} label="1 (None)" labelPlacement="top" required/>
      <FormControlLabel value="2" control={<Radio required={true} />} label="2" labelPlacement="top" sx={{ mr: 3 }}/>
      <FormControlLabel value="3" control={<Radio required={true} />} label="3" labelPlacement="top" sx={{ mr: 3 }}/>
      <FormControlLabel value="4" control={<Radio required={true} />} label="4" labelPlacement="top" sx={{ mr: 3 }}/>
      <FormControlLabel value="5" control={<Radio required={true} />} label="5" labelPlacement="top" />
    </RadioGroup>
  </FormControl>
)
}


function Questionaire() {
  //symptoms we are tracking
  const storedLabels = ["Difficulty Breathing", "Chest Pain", "Fatigue", "Fever", "Cough", "Loss of Smell", "Loss of Taste"]
  const nameIDs = ["breathing", "chest", "fatigue", "fever", "cough", "smell", "taste"]
  //getting data from form
  let diffBreathing = FormRadio(storedLabels[0], nameIDs[0], nameIDs[0], nameIDs[0])
  let chestPain = FormRadio(storedLabels[1], nameIDs[1], nameIDs[1], nameIDs[1])
  let fatigue = FormRadio(storedLabels[2], nameIDs[2], nameIDs[2], nameIDs[2])
  let fever = FormRadio(storedLabels[3], nameIDs[3], nameIDs[3], nameIDs[3])
  let cough = FormRadio(storedLabels[4], nameIDs[4], nameIDs[4], nameIDs[4])
  let smell = FormRadio(storedLabels[5], nameIDs[5], nameIDs[5], nameIDs[5])
  let taste = FormRadio(storedLabels[6], nameIDs[6], nameIDs[6], nameIDs[6])
  return (
    <>
        <div align="Center">
        <Paper elevation={5} component="form" sx={{ width: 700, height: 2000, mt: "110rem", pt: '2%'}}>
          <Typography component="h2" variant="h2" >
            Symptoms
          </Typography>

          {/* Getting the patients tempature */}
          <FormControl sx={{mt: 10}}>
            <FormLabel id="temperature" sx={{ mb: 3 }}>
              Please enter your temperature (in degrees Celsius)
            </FormLabel>
            <TextField id="temperature" name="temperature" required label="Temperature (°C)" variant="filled" type="number" inputProps={{ maxLength: 3 }} sx={{ mb: 5 }} />
          </FormControl>

          <br></br>
          {/* Getting the patients weight */}
          <FormLabel id="weight" sx={{ mb: 3 }}>
            Please enter your weight (in kg)
          </FormLabel>

          <br></br>

          <FormControl >
            <TextField id="weight" name="weight" required label="Weight (kg)" variant="filled" type="number" inputProps={{ maxLength: 3 }} sx={{ mb: 5, width: 372 }} />
          </FormControl>

          <br></br>
          {/* Displaying the radio buttons for all the remaining symptoms */}
          {diffBreathing}
          {chestPain}
          {fatigue}
          {fever}
          {cough}
          {smell}
          {taste}

          <div>
            {/* Box for any comments */}
            <FormControl>
              <FormLabel id="symptoms" sx={{ mb: 3 }}>Any Additional Symptoms (Optional)?</FormLabel>
              <TextField id="symptoms" multiline rows={4} label="Enter Any Other Symptoms Here" variant="filled" name="symptoms" sx={{ width: 350 }}/>
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
