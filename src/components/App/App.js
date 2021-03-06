import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import authOperations from '../../redux/auth/auth-operations';
import themeSelector from '../../redux/theme/theme-selectors';
import PrivateRoute from '../../components/PrivateRoute';
import PublicRoute from '../../components/PublicRoute';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Spinner from '../../components/Spinner';
import styles from './App.module.scss';

const Home = lazy(() =>
  import('../../views/Home/Home' /* webpackChunkName: "Home-page" */),
);
const Contacts = lazy(() =>
  import(
    '../../views/Contacts/Contacts' /* webpackChunkName: "Contacts-page" */
  ),
);
const Register = lazy(() =>
  import(
    '../../views/Register/Register' /* webpackChunkName: "Register-page" */
  ),
);
const Login = lazy(() =>
  import('../../views/Login/Login' /* webpackChunkName: "Login-page" */),
);

const App = () => {
  const dispatch = useDispatch();

  const theme = useSelector(themeSelector);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div className={theme ? styles.bodyDark : styles.bodyLight}>
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
    </div>
  );
};

export default App;
