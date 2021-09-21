import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Snackbar from '@mui/material/Snackbar';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TodoForm from "../components/todoForm";
import { getTodoInfoAction, createTodoAction, updateTodoAction } from "../redux/actions";
import { back } from "../constants/string.json";


const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        padding: "10px",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        flexDirection: "column"
    },
    header: {
        display: "flex",
        height: "100px",
        paddingTop: "10px",
        alignItems: "center",
        width: "50%"
    }
});


export default function Home() {
    const history = useHistory();
    const { id } = useParams();
    const classes = useStyles();
    const dispatch = useDispatch();

    const { currentTodo } = useSelector(state => state.todos);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (id) {
            dispatch(getTodoInfoAction(id));
        }
    }, [id])

    const handleOpenSnackBar = () => {
        setOpen(true);
    };

    const handleRedirect = () => {
        handleOpenSnackBar();
        setTimeout(() => {
            history.push('/');
        }, 1500);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleSubmit = (e, formData) => {
        e.stopPropagation();
        e.preventDefault();
        if (id) {
            dispatch(updateTodoAction(id, formData, () => handleRedirect()));
        } else dispatch(createTodoAction(formData, () => handleRedirect()));

    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <Button variant="contained" onClick={() => history.push('/')}>
                    {back}
                </Button>
            </div>
            <TodoForm formInfo={id ? currentTodo : {}} handleSubmit={handleSubmit} />
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Success"
            />
        </div >

    );
}


