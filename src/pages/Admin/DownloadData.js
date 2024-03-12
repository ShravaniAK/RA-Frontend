import download from "downloadjs";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const DownloadData = () => {
  const [userData, setUserData] = React.useState([]);

  const handleDownloadAll = () => {
    fetch("https://assesment-web.onrender.com/download/", {
      method: 'GET',
    })
      .then(response => response.text())
      .then(result => download(result, "all_data.csv", "text/csv"))
      .catch(error => console.log('error', error));
  };
  
  const handleDownload = () => {
    fetch("https://assesment-web.onrender.com/usersdata")
      .then(response => response.json())
      .then(result => download(JSON.stringify(result), "all_data.csv", "text/csv"))
      .catch(error => console.log('error', error));
  };

  return (
    <div>
       <a
        href="https://assesment-web.onrender.com/getQuestionSheet"
        download="all_data.csv"
      >
        <Button
          variant="contained"
          color="primary"
          style={{ margin: '20px' }}
        >
          Download Question Bank
        </Button>
      </a>
      <a
        href="https://assesment-web.onrender.com/usersdata"
        download="all_data.csv"
      >
        <Button
          variant="contained"
          color="primary"
          style={{ margin: '20px' }}
        >
          Download All CSV
        </Button>
      </a>

      <Button
        
        variant="contained"
        color="primary"
        style={{ margin: '20px' }}
        onClick={handleDownloadAll}
      >
        Download Test result
      </Button>
      
      {/* Rest of your table rendering code */}
    </div>
  );
};

export default DownloadData;
