import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';
import { DataGrid } from './components/DataGrid';
import { ChartArea } from './components/ChartArea';

const App = () => {
  const [rows, setRows] = useState([]);
  useEffect(
    () => {
      fetch('https://spreadsheets.google.com/feeds/list/1tHJw9nUABvlbVpfIiy_cNG5HDRFe_JAJUG2qLlcwi_k/od6/public/values?alt=json')
        .then(
          (response) => {
            return response.json();
          }
        ).then(
          (data) => {

            const cleanRows = data.feed.entry.map(row => {
              const cleanRow = {};

              const columns = row.content.$t.split(', ');

              columns.forEach(column => {
                const splat = column.split(': ');
                cleanRow[splat[0]]=splat[1];
              })

              return cleanRow;
            });

            setRows(cleanRows);

          }
        )
    }, []
  )

  return (
    <div className="section">
      <ChartArea />
      <DataGrid rows={rows}/>
    </div>
  );
}

export default App;
