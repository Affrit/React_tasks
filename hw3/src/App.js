import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './HOC/PrivateRoute/PrivateRoute';
import { Table } from './components/Table/Table';
import { InputRange } from './components/InputRange/InputRange';
import { SignUpForm } from './components/SignUpForm/SignUpForm';
import { SignInForm } from './components/SignInForm/SignInForm';
import { ToDoList } from './components/ToDoList/ToDoList';
import { Navbar } from './components/Navbar/Navbar'
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const onAuth = () => {
    setIsAuth(true)
  }

  return (
    <div className="app-wrap">
      <BrowserRouter>
        <Navbar />
        <div className="app-content">
          <Switch>
            <Route
              exact path="/" render={(props) => <SignInForm {...props} title='Sign In Form' onAuth={onAuth} />}
            />
            <Route
              exact path="/signup" render={(props) => <SignUpForm {...props} title='Sign Up Form' />}
            />
            <Route
              exact path="/input-range" render={(props) => <InputRange {...props} min='1' max='100' step='1' />}
            />
            <PrivateRoute
              exact path="/table"
              component={Table} isAuth={isAuth}
            />
            <PrivateRoute
              exact path="/todo-list"
              component={ToDoList} isAuth={isAuth}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
