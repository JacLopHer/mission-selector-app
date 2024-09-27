import { Checkbox, Grid } from "@mui/material"
import React, {useState} from 'react';
import { StyledTitle } from "./StyledTitle";

const style = {width: '100%', height: 'auto' };
const greyedStyle = {width: '100%', height: 'auto', filter:'grayscale(1)' }


export const MapItem = ({map, index, handleSelectMap}) => {
    const [checked, setChecked] = useState(false)

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }
    
    return  (
        <Grid item key={index} xs={6}>
            <StyledTitle variant="h7" onClick={() =>  handleSelectMap(map)}>Table {++index}</StyledTitle>
            <Checkbox 
                onChange={handleChange}
                checked={checked}
                inputProps={{ 'aria-label': 'controlled' }}    
            />
            <img
                src={map.image}
                alt={map.name}
                style={checked ? greyedStyle : style} 
                onClick={() =>  handleSelectMap(map)}
            />
        </Grid>
    )  
}