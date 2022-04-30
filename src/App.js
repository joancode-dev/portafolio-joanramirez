import './app.css';
import Project from './components/Project/Project';
import Principal from './components/Principal';
import './particles.css';



import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>

      <Router>
        <Routes>

          <Route path="/" element={<Principal />} />

          <Route path="/project/:number/:slug" element={<Project />} />

          <Route path="*" element={<h1>Error 404</h1>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
