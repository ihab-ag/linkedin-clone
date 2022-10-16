import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Entry from './components/layouts/entry.layout';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Entry />} >
          <Route path='login' element={<Login />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
