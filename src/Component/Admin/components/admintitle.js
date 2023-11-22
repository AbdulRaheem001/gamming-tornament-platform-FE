import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { FormatBold } from '@mui/icons-material';

function Title(props) {
    return (
        <Typography component="h2" variant="h5"  color="black" sx={{fontWeight: 'bold'}} gutterBottom>
            {props.children}
        </Typography>
    );
}

Title.propTypes = {
    children: PropTypes.node,
};

export default Title;