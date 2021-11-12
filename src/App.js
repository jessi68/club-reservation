// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  fetchDb  from './firebase/fetchDb'
import  updateDb  from './firebase/updateDb'
import  signIn  from './firebase/auth'
import StudentSignUp from './components/StudentSignUp'
import OwnerSignUp from './components/OwnerSignUp';
import SignIn from './components/SignIn';
import reactDom from 'react-dom';

function App() {

  useEffect(() => {

    signIn({id:"student1", password:"sㅅ1"})
    
  }, [])
  
  return (  
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/SignUp/Owner" element={<OwnerSignUp />} exact/>
        <Route path="/SignUp/Student" element={<StudentSignUp />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
