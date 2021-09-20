import * as React from 'react';
import { makeStyles } from '@mui/styles';

import Table from "../../components/table/table";


const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        padding: "10px",
        alignItems: "center",
        justifyContent: "center"
    },
});

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <div> </div>
            <div className={classes.wrapper}>
                <Table
                    tableBody={[{ name: "Ders Çalış", description: "çabuk ders çalış", status: false },
                    { name: "Ders Çalış", description: "çabuk ders çalış", status: false },
                    { name: "Ders Çalış", description: "çabuk ders çalış", status: false }]}
                    tableHeaders={["Name", "Description", "Status"]} />
            </div>
        </div>
    );
}


