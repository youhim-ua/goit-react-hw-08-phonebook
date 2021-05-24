import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

const PrivateRoute = ({ children, redirectTo, ...routeProps }) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthorized);

  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;
