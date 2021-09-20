import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import Switch from '@mui/material/Switch';





export default function ToDoTable({ tableHeaders, tableBody }) {

    const TableHeader = tableHeaders.map(header => <TableCell>{header}</TableCell>)

    const TableBodyList = tableBody.map(todoElem => <TableRow
        key={todoElem.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell component="th" scope="row">
            {todoElem.name}
        </TableCell>
        <TableCell >{todoElem.description}</TableCell>
        <TableCell ><Switch defaultChecked={todoElem.status} />
        </TableCell>

    </TableRow>
    )

    return (
        <TableContainer style={{ width: "50%" }} component={Paper}>
            <Table>
                <TableHead>
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