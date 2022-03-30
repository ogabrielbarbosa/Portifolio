import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routes from './routes';

export default function App() {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}