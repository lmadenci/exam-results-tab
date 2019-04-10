import React, {useState} from 'react';
import './ChartArea.scss';


export const ChartArea = () => {
  const [showChart, setShowChart] = useState(false);

  const buttonProps = { showChart, setShowChart}

  const chart = showChart?<Chart />:<div>Add a chart for an assessment type</div>;

  return (
    <div className="chartArea">
      {chart}
      <Button { ...buttonProps } />
    </div>
  )
};


const Button = ({ showChart, setShowChart }) => {
    const text = showChart?'Remove':'Add';
    const toggle = () => {
      setShowChart(!showChart);
    }
    return (
        <button className="Button" onClick={ toggle }>
            {text} Chart
        </button>
    )
};


const ChartELP = () => {
  const styles = {
    fill: 'none'
  };

  const hideStyle = {
    display: 'none'
  };

  return (
    <div>
      <svg class="bx--graph" width="600" height="300"><g class="bx--group-container" transform="translate(65, 30)"><g class="bx--axis bx--axis--y" stroke-dasharray="4" fill="none" font-size="10" font-family="sans-serif" text-anchor="end"><path class="domain" stroke="#000" d="M715,210.5H0.5V0.5H715"></path><g class="tick" opacity="1" transform="translate(0,210)"><line stroke="#000" x2="715" y1="0.5" y2="0.5"></line><text fill="#000" x="-16" y="0.5" dy="0.32em" font-family="Arial">0</text></g><g class="tick" opacity="1" transform="translate(0,168)"><line stroke="#000" x2="715" y1="0.5" y2="0.5"></line><text fill="#000" x="-16" y="0.5" dy="0.32em" font-family="Arial">1</text></g><g class="tick" opacity="1" transform="translate(0,126)"><line stroke="#000" x2="715" y1="0.5" y2="0.5"></line><text fill="#000" x="-16" y="0.5" dy="0.32em" font-family="Arial">2</text></g><g class="tick" opacity="1" transform="translate(0,84)"><line stroke="#000" x2="715" y1="0.5" y2="0.5"></line><text fill="#000" x="-16" y="0.5" dy="0.32em" font-family="Arial">3</text></g><g class="tick" opacity="1" transform="translate(0,42)"><line stroke="#000" x2="715" y1="0.5" y2="0.5"></line><text fill="#000" x="-16" y="0.5" dy="0.32em" font-family="Arial">4</text></g><g class="tick" opacity="1" transform="translate(0,0)"><line stroke="#000" x2="715" y1="0.5" y2="0.5"></line><text fill="#000" x="-16" y="0.5" dy="0.32em" font-family="Arial">5</text></g></g><g class="bx--axis bx--axis--x" transform="translate(0, 210)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle"><path class="domain" stroke="#000" d="M0.5,0V0.5H715.5V0"></path><g class="tick" opacity="1" transform="translate(58.9110254032258,0)"><line stroke="#000" y2="0" x1="0.5" x2="0.5"></line><text fill="#000" y="16" x="0.5" dy="0.71em" font-family="Arial">Jun</text></g><g class="tick" opacity="1" transform="translate(121.81425120967742,0)"><line stroke="#000" y2="0" x1="0.5" x2="0.5"></line><text fill="#000" y="16" x="0.5" dy="0.71em" font-family="Arial">Jul</text></g><g class="tick" opacity="1" transform="translate(186.81425120967742,0)"><line stroke="#000" y2="0" x1="0.5" x2="0.5"></line><text fill="#000" y="16" x="0.5" dy="0.71em" font-family="Arial">Aug</text></g><g class="tick" opacity="1" transform="translate(251.81425120967742,0)"><line stroke="#000" y2="0" x1="0.5" x2="0.5"></line><text fill="#000" y="16" x="0.5" dy="0.71em" font-family="Arial">Sep</text></g><g class="tick" opacity="1" transform="translate(314.71747701612907,0)"><line stroke="#000" y2="0" x1="0.5" x2="0.5"></line><text fill="#000" y="16" x="0.5" dy="0.71em" font-family="Arial">Oct</text></g><g class="tick" opacity="1" transform="translate(379.717477016129,0)"><line stroke="#000" y2="0" x1="0.5" x2="0.5"></line><text fill="#000" y="16" x="0.5" dy="0.71em" font-family="Arial">Nov</text></g><g class="tick" opacity="1" transform="translate(442.70806841397854,0)"><line stroke="#000" y2="0" x1="0.5" x2="0.5"></line><text fill="#000" y="16" x="0.5" dy="0.71em" font-family="Arial">Dec</text></g><g class="tick" opacity="1" transform="translate(507.7080684139785,0)"><line stroke="#000" y2="0" x1="0.5" x2="0.5"></line><text fill="#000" y="16" x="0.5" dy="0.71em" font-family="Arial">Jan</text></g><g class="tick" opacity="1" transform="translate(572.7080684139785,0)"><line stroke="#000" y2="0" x1="0.5" x2="0.5"></line><text fill="#000" y="16" x="0.5" dy="0.71em" font-family="Arial">Feb</text></g><g class="tick" opacity="1" transform="translate(631.4177458333334,0)"><line stroke="#000" y2="0" x1="0.5" x2="0.5"></line><text fill="#000" y="16" x="0.5" dy="0.71em" font-family="Arial">Mar</text></g><g class="tick" opacity="1" transform="translate(696.3303802419355,0)"><line stroke="#000" y2="0" x1="0.5" x2="0.5"></line><text fill="#000" y="16" x="0.5" dy="0.71em" font-family="Arial">Apr</text></g></g><g><path class="bx--line" d="M0,143.85L65,100.58999999999999L130,154.76999999999998L194.99999999999997,190.68L260,7.560000000000002L325,87.78L390.0873655913978,141.12L455.0873655913978,139.01999999999998L520.0873655913979,106.47L585.0873655913979,94.28999999999999L650.0873655913979,207.9L715,78.53999999999999" stroke-dasharray="1098.1563720703125 0"></path></g><rect class="bx--graph-overlay" height="210" width="65.00000000000006" x="455.0873655913978" style={hideStyle}></rect><rect width="715" height="210" style={styles}></rect></g></svg>
    </div>
  );
};

  const Chart = () => {
    const elpTest = <ChartELP />;
    return (
      <div className="chartContainer">
        {elpTest}
      </div>
  )


};
