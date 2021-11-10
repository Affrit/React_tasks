import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './HOC/PrivateRoute/PrivateRoute';
import { Table } from './components/Table/Table';
import { InputRange } from './components/InputRange/InputRange';
import { SignUpForm } from './components/SignUpForm/SignUpForm';
import { SignInForm } from './components/SignInForm/SignInForm';
import { ToDoList } from './components/ToDoList/ToDoList';
import { Header } from './components/Header/Header';
import { useSelector } from 'react-redux'

function App() {
  const { isAuth } = useSelector(({ login: { isAuth } }) => ({
    isAuth
  }))

  return (
    <div className="app-wrap">
      <BrowserRouter>
        <Header isAuth={isAuth} />
        <div className="app-content">
          <Switch>
            <Route
              exact path="/" render={(props) => <SignInForm {...props} title='Sign In Form' />}
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
