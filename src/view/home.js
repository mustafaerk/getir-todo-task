import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';


import Table from "../components/table";
import { getTodoListAction } from "../redux/actions";
import { addNewTodo } from "../constants/string";


const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        padding: "10px",
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        display: "flex",
        height: "100px",
        paddingTop: "10px",
        alignItems: "center",
        justifyContent: "center"
    }
});


export default function Home() {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();

    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { todoList } = useSelector(state => state.todos);


    useEffect(() => {
        setTodos(todoList);
        setIsLoading(false);
    }, [todoList]);


    useEffect(() => {
        setIsLoading(true)
        dispatch(getTodoListAction());
    }, [])

    return (
        isLoading ? <div> Loading </div>
            : <div>
                <div className={classes.header}>
                    <Button variant="contained" endIcon={<AddIcon />} onClick={() => history.push('/newtodo')}>
                        {addNewTodo}
                    </Button>
                </div>
                <div className={classes.wrapper}>
                    <Table
                        tableBody={todos}
                        tableHeaders={["Name", "Description", "Status"]} />
                </div>
            </div>
    );
}


