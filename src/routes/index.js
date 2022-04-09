import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../Pages/Home';
import Skills from '../Pages/Skills';
import Contact from '../Pages/Contact'; 

export default function Routes(){
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  )
}