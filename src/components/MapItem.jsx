import { Checkbox, Grid } from "@mui/material"
import React, {useContext} from 'react';
import { StyledTitle } from "./StyledTitle";
import { Navigate } from "react-router-dom";
import MissionContext from "../MissionContext";


export const MapItem = (map, index) => {
    
    const {selectedMission, setSelectedMap, selectedTournamentType} = useContext(MissionContext);
    const handleSelectMap = (map) => {
        setSelectedMap(map);
        Navigate('/mission-details');
      };
    
    return  <Grid item key={index} xs={6}>
                <StyledTitle variant="h7" onClick={() =>  handleSelectMap(map)}>Table {++index}</StyledTitle>
                <Checkbox  style={{marginLeft:'50%'}}/>
                <img
                    src={map.image}
                    alt={map.name}
                    style={{ width: '100%', height: 'auto' }} 
                    onClick={() =>  handleSelectMap(map)}
                />
            </Grid>
          
}