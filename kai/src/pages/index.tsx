import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
import { ClientRequest } from 'http';

function createData(
  name: string,
  calories: string,
) {
  return { name, calories};
}

const rows = [
  createData('設立', '2011年XX月XX日'),
  createData('代表', '長内 海渡'),
  createData('現役メンバー部員', '46人'),
];



const Main: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>FTE概要</title>
        <meta name="description" content="" />
      </Head>

      <main>
        <h1 className={styles.text}>団体概要</h1>

        <TableContainer component={Paper} sx={{ 
          marginTop: 8,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'}} >
          <Table sx={{ minWidth:700 , width:700 ,}} aria-label="simple-table">
            <TableHead>
              <TableRow>
              <TableCell>団体名</TableCell>
              <TableCell align="left">東北大学  FROM THE EARTH</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
       


      <footer>
        
      </footer>
    </div>
  )
}


export default Main
