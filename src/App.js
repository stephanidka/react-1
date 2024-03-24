// import logo from './logo.svg';
import './App.css';
// import { SketchPicker } from 'react-color';
import { Chart } from "react-google-charts";

export const data = [
  ["кто", "в процентном соотношении"],
  ["художники", 53],
  ["тунеядцы", 12],
  ["программисты", 8],
  ["неудачники", 15],
  ["богатые", 12], // CSS-style declaration
];

export const options = {
  title: "Мои друзья",
  pieHole: 0.3,
  is3D: false,
};

function App() {
  return (
    <div className="App">
      <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
  );
}

export default App;
