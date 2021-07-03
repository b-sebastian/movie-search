import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Movie} from "../Results.types";

import './ResultsTable.css';
import {Link} from "@material-ui/core";
import {useHistory} from "react-router-dom";

type ResultsTableProps = {
    data: Movie[];
}

const ResultsTable = ({ data }: ResultsTableProps) => {
    const history = useHistory();

    return (
        <TableContainer component={Paper} className='resultsTable'>
            <Table aria-label="Search Results">
                <TableHead className='resultsTable-thead'>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((movie) => (
                        <TableRow key={`movie-${movie.imdbID}`}>
                            <TableCell component="th" scope="row"><Link onClick={() => history.push(`/movie/${movie.imdbID}`)}>{movie.Title}</Link></TableCell>
                            <TableCell align="right">{movie.Year}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ResultsTable;