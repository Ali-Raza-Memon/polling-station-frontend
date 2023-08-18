import './App.css';
import Home from "./component/Home";
import LogIn from "./component/LogIn";
import SignUp from "./component/SignUp";
// import { Routes, Route, Link} from 'react-router-dom';
import { Routes, Route, Link} from 'react-router-dom';
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <div>


        {/*<Routes>*/}
        {/*    <Route path='/' element = {<LogIn />} />*/}
        {/*    <Route path='/sign-up' element = {<SignUp/>} />*/}
        {/*</Routes>*/}


      <Routes>
        <Route path='/' element = {<LogIn />} />
        <Route path='/sign-up' element = {<SignUp/>} />
        <Route path='/dashboard' element = {<Dashboard/>} />
      </Routes>


    </div>
  );
}

export default App;
