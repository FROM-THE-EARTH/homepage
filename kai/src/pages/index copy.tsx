import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function createLabel(
  Label_Text : string,
){
  return{Label_Text};
}

function createData(
  name: string,
  calories: string,
) {
  return { name, calories};
}

const rows = [
  createData('団体名', '東北大学  FROM THE EARTH'),
  createData('設立', '2011年XX月XX日'),
  createData('代表', '長内 海渡'),
  createData('現役メンバー部員', '46人'),
];

const Label_Text = [
  createLabel('団体紹介'),
]

export default function BasicTable() {
  return (

    <TableContainer component={Paper} sx={ {marginTop: 8,
      display: '-ms-flexbox',
      marginLeft:10,
      flexDirection: 'column',}} >
      <h1>.Label_Text</h1>
      <Table sx={ {marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        }}  aria-label="" >
        <TableBody sx={{ '&:last-child td ,&:last-child th': { border: 0} }} >
          {rows.map((row) => (
            <TableRow
              key={row.name}
              
            >
              <TableCell component="h1" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}