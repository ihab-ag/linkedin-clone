import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Entry from './components/layouts/entry.layout';
import Login from './components/pages/login';
import { Main } from './components/pages/main';
import { Signup } from './components/pages/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Entry />} >
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>
        <Route path='main' element={<Main />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
