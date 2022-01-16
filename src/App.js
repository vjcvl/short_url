import {browserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import Login from './Comp/Login';
import Register from './Comp/Register';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Routes>
       <Route path = "/" element = {<Login/>}/>
       <Route path = "/register" element = {<Register/>}/>
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
