import React from 'react';
import './App.css';
import schoolData from './CollegeBasketballTeams.json';

interface SchoolProps {
  name: string;
  school: string;
  city: string;
  state: string;
}

function Header() {
  return (
    <div>
      <h1>March Madness</h1>
      <h2>
        Here are all the NCAA Teams to be considered for 2024 March Madness
      </h2>
    </div>
  );
}

class School extends React.Component<SchoolProps> {
  render() {
    const { school, name, state, city } = this.props;

    return (
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          marginBottom: '10px',
        }}
      >
        <h2>School Name: {school}</h2>
        <h3>Mascot Name: {name}</h3>
        <h3>
          Location: {city}, {state}
        </h3>
      </div>
    );
  }
}

function SchoolList() {
  const teams = schoolData.teams;
  return (
    <div>
      {teams.map((schoolNum, index) => (
        <School key={index} {...schoolNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <SchoolList />
    </div>
  );
}

export default App;
