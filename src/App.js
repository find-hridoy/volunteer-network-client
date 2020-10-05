import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import AddEvent from './components/AddEvent/AddEvent';
import Dashboard from './components/Dashboard/Dashboard';
import EventTasks from './components/EventTasks/EventTasks';
import Home from './components/Home/Home';
import AdminLogin from './components/Login/AdminLogin';
import Login from './components/Login/Login';
import NotFound from './components/NotFount/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RegisterForm from './components/RegisterForm/RegisterForm';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/adminLogin">
            <AdminLogin />
          </Route>
          <PrivateRoute path="/register/:id">
            <RegisterForm />
          </PrivateRoute>
          <PrivateRoute path="/eventTasks">
            <EventTasks />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addEvent">
            <AddEvent />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
