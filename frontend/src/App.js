import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Entry from './components/layouts/entry.layout';
import Login from './components/pages/login';
import { Main } from './components/layouts/main.layout';
import { Signup } from './components/pages/signup';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Profile } from './components/pages/profile';
import { Jobs } from './components/pages/jobs';
import { Notifications } from './components/pages/notifications';

export const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <Router>
        <Routes>
          <Route path='/' element={<Entry />} >
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>
          <Route path='main' element={<Main />}>
            <Route path='profile' element={<Profile />} />
            <Route path='jobs' element={<Jobs />} />
            <Route path='notifications' element={<Notifications />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
