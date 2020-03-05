import React from 'react';
import './App.scss';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { AppBlock } from "./elements";
import FormConstructorComponent from "./components/FormConstructorComponent/FormConstructorComponent";
import FormComponent from "./components/FormComponent/FormComponent";

function App() {
  return (
    <AppBlock>
     <Router>
       <Switch>
         <Route exact path='/' component={FormConstructorComponent} />
         <Route exact path='/form' component={FormComponent} />
       </Switch>
     </Router>
    </AppBlock>
  );
}

export default App;
