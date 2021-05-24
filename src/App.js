import { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Wrapper from './components/Wrapper';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Spinner from './components/Spinner';

const Home = lazy(() =>
  import('./views/Home/Home' /* webpackChunkName: "Home-page" */),
);
const Contacts = lazy(() =>
  import('./views/Contacts/Contacts' /* webpackChunkName: "Contacts-page" */),
);
const Register = lazy(() =>
  import('./views/Register/Register' /* webpackChunkName: "Register-page" */),
);
const Login = lazy(() =>
  import('./views/Login/Login' /* webpackChunkName: "Login-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <Header>
          <Wrapper>
            <Navigation />
          </Wrapper>
        </Header>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <PublicRoute path="/" exact>
              <Home />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <Contacts />
            </PrivateRoute>
            <PublicRoute path="/register" restricted redirectTo="/contacts">
              <Register />
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <Login />
            </PublicRoute>
          </Suspense>
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
