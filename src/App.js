import {BrowserRouter as Router, Navigate, Route , Routes } from 'react-router-dom';
import { useContext } from 'react';

//  CONTEXT
import FirebaseContext from './Context/FireBaseContext';

//  ROUTES
import Public from './Routes/Public';
import Private from './Routes/Private';

function App() {
  const {authToken}= useContext(FirebaseContext);
 if (!authToken){
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Navigate to={'auth'}/>}/>
      <Route path='auth/*' element={<Public/>}/>
       </Routes>
    </Router>
  );
 }else{
  return (
    <Router>
      <Routes>
      
      <Route path='/*' element={<Private/>}/>
       
      </Routes>
    </Router>
  );
 }
}

export default App;
