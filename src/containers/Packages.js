import { connect } from 'react-redux';
import PackagesView from '../components/Packages';

const mapStateToProps = (state) => {
  const { packages } = state.packages;
  return {
    packages, 
  };
};

const Packages = connect(mapStateToProps)(PackagesView);

export default Packages;