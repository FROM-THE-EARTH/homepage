import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

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
    
    <TableContainer component={Paper}>
      <h1>.Label_Text</h1>
      <Table sx={{ minWidth: 100 }} aria-label="">
        <TableBody sx={{ '&:last-child td ,&:last-child th': { border: 3 } }}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              
            >
              <TableCell component="th" scope="row">
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