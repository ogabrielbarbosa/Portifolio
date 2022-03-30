import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';

export default function Routes(){
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
  )
}