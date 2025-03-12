import { Checkbox, Grid } from "@mui/material";
import React, { useState } from 'react';
import { StyledTitle } from "./StyledTitle";
import { LazyImage } from "./LazyImage";

const style = { width: '100%', height: 'auto' };
const greyedStyle = { width: '100%', height: 'auto', filter: 'grayscale(1)' };

const MapItem = ({ map, index, handleSelectMap }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <Grid item key={index} xs={6} sm={4} style={{ padding: '2px', marginBottom: '0.1rem' }}>
            <Grid container alignItems="center">
                <Grid item xs>
                    <StyledTitle variant="h7" onClick={() => handleSelectMap(map)} style={{ fontSize: '1rem' }}>
                        TABLE {index + 1}
                    </StyledTitle>
                </Grid>
                <Grid item>
                    <Checkbox
                        onChange={handleChange}
                        checked={checked}
                        inputProps={{ 'aria-label': 'controlled' }}
                        size="small"
                        style={{ padding: 0 }}
                    />
                </Grid>
            </Grid>
            <LazyImage
                src={map.image}
                alt={map.name}
                style={checked ? greyedStyle : style}
                onClick={() => handleSelectMap(map)}
            />
        </Grid>
    );
};

export default MapItem;
