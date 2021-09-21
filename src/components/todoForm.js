import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import { makeStyles } from '@mui/styles';

import { submit, addNewTodo } from "../constants/string";


const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid",
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 5px",
        borderRadius: "25px"
    },
    header: {
        textAlign: "center",
        fontSize: "20px",
        fontWeight: 600,
    }
});

export default function TodoForm({ formInfo, handleSubmit }) {
    const classes = useStyles();
    const [formData, setFormData] = useState({});

    useEffect(() => {
        setFormData(formInfo)
    }, [formInfo])

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    const hangleSwitchChange = (event) => {
        setFormData({ ...formData, status: event.target.checked })
    }





    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            className={classes.wrapper}
            onSubmit={(e) => handleSubmit(e, formData)}
        >
            <div className={classes.header}>
                {addNewTodo}
            </div>
            <TextField required name="name" id="standard-basic" label="Name" variant="outlined" value={formData.name} onChange={handleChange} />
            <TextField required name="description" id="standard-basic" label="Description" variant="outlined" value={formData.description} onChange={handleChange} />
            <FormControlLabel control={<Switch defaultValue={false} checked={formData.status} onChange={hangleSwitchChange} />} label="Status" />
            <Button variant="contained" type="submit">
                {submit}
            </Button>
        </Box>
    );
}

TodoForm.propTypes = {
    formInfo: PropTypes.object,
};


TodoForm.defaultProps = {
    formInfo: {},
};