import React from 'react';
import './DataGrid.scss';

export const DataGrid = ({rows}) => {
  if (rows.length === 0) {
    return (
      <h1>loading!</h1>
    )
  }

  const ths =  <HeaderRow colNames={Object.keys(rows[0])} />;
  const trs = rows.map(row => <Row row={row} />);

  return (
    <div className="container">
      <table>
        {ths}
        {trs}
      </table>
    </div>
  )
};


const Row = ({row}) => {
  const tds = Object.keys(row).map(key => <td>{row[key]}</td>);
  return (
    <tr>{tds}</tr>
  )
};

const HeaderRow = ({colNames}) => {
  const ths = colNames.map(colName => <th>{colName}</th>);
  return (
    <tr>{ths}</tr>
  )
};
