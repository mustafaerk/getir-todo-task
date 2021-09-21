import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
    button: {
        cursor: "pointer",
        color: "#09158F !important",
        fontWeight: "bold !important",
        fontSize: "15px !important"
    },
    tableHeader: {
        backgroundColor: "black",
    },
    tableHeaderCell: {
        color: "white !important"
    }
});



export default function ToDoTable({ tableHeaders, tableBody }) {
    const history = useHistory();
    const classes = useStyles();


    const TableHeader = tableHeaders.map(header => <TableCell key={"todo" + header} className={classes.tableHeaderCell}>{header}</TableCell>)

    const TableBodyList = tableBody.map((todoElem, index) => <TableRow
        key={"tablerow" + todoElem.id + index}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell className={classes.button} component="th" scope="row" onClick={() => history.push(`/todo/${todoElem.id}`)}>
            {todoElem.name}
        </TableCell>
        <TableCell >{todoElem.description}</TableCell>
        <TableCell ><Switch defaultChecked={todoElem.status} disabled />
        </TableCell>

    </TableRow>
    )

    return (
        <TableContainer style={{ width: "50%" }} component={Paper}>
            <Table>
                <TableHead className={classes.tableHeader}>
                    <TableRow>
                        {TableHeader}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {TableBodyList}
                </TableBody>
            </Table>
        </TableContainer>
    );


}


ToDoTable.propTypes = {
    tableHeaders: PropTypes.array,
    tableBody: PropTypes.array
};


ToDoTable.defaultProps = {
    tableHeaders: [],
    tableBody: []
};