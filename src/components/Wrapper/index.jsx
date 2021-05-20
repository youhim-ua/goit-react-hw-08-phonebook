import styless from './Wrapper.module.scss';

const Wrapper = ({ children }) => {
  return <div className={styless.wrapper}>{children}</div>;
};

export default Wrapper;
