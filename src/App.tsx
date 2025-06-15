import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home.jsx';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Billing from './pages/Billing';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/billing" element={<Billing />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
