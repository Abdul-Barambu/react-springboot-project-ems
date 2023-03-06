import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import { ListEmployeeComponent } from './components/ListEmployeeComponent';
import { AddEmployeeComponent } from './components/AddEmployeeComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={ListEmployeeComponent}></Route>
          <Route path="/add-employee" component={AddEmployeeComponent}></Route>
          <Route path="/edit-employee/:id" component={AddEmployeeComponent}></Route> {/* add id dynamically using /:id */}
        </Switch>
        {/* <FooterComponent /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
