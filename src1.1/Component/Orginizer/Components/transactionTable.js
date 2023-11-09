import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976D2",
    color:"black",
    fontStyle :"bold",
    fontSize: '14px'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    color: 'black'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  background: "white",
  opacity: 0.8,
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0.1,
  },
}));
function createData(date, type, amount, status) {
  return { date, type, amount, status };
}

const rows = [
  createData('2023-10-12', 'Purchase', 100, 'Success'),
  createData('2023-10-11', 'Withdrawal', 50, 'Success'),
  createData('2023-10-10', 'Purchase', 200, 'Failed'),
  // Add more rows as needed
];

const TransactionTable = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Transaction Date</StyledTableCell>
              <StyledTableCell>Transaction Type</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.date}
                </StyledTableCell>
                <StyledTableCell>{row.type}</StyledTableCell>
                <StyledTableCell>{row.amount}</StyledTableCell>
                <StyledTableCell>{row.status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransactionTable;