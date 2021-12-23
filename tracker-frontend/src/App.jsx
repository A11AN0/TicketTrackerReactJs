import styles from './App.module.scss';
import Navbar from './components/Navbar';
import team from './data/team';
import Card from './components/Card';

const App = () => {

  return (
    <>
    <Navbar/>
    {team.map(teamMember => <Card team={teamMember}/> )}  
    </>
  );
}


export default App;

//Basic steps for setting up CRA

/* 
1. Change title in public/index.html
2. Rename src/App.js => App.jsx
3. Clear out code from return in App.js
4. Clear out code from App.css
5. Add global reset to index.css
6. Install sass
7. Rename App.css => App.module.scss & change import
*/