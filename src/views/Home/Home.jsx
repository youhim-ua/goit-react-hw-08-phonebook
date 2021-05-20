import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import Wrapper from '../../components/Wrapper';
import styles from './Home.module.scss';

const Home = ({ isAuthorized }) => {
  return (
    <Wrapper>
      <main className={styles.hero}>
        <section>
          {!isAuthorized ? (
            <h1>
              <span>Hollo user, you need to be </span>
              <Link to="/register">registered</Link>
              <span> to start use app.</span>
              <br />
              <span>So go on!</span>
            </h1>
          ) : (
            <h1>You are already in, Enjoy it!!! </h1>
          )}
          {!isAuthorized ? (
            <img
              src="https://static.wixstatic.com/media/fc4800_319d58f7e4684248a81ac164770d5630~mv2.gif"
              alt="calling man"
              width="320"
            />
          ) : (
            <img
              src="https://i.gifer.com/2Wh.gif"
              alt="surprised man"
              width="320"
            />
          )}
        </section>
      </main>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  isAuthorized: authSelectors.getIsAuthorized(state),
});

export default connect(mapStateToProps)(Home);
