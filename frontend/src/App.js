import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Entry from './components/layouts/entry.layout';
import Login from './components/login';
import { Signup } from './components/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Entry />} >
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
