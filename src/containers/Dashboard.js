import {connect} from "react-redux";
import Dashboard from "../components/Dashboard";

const mapStateToProps = (state) => {
  return {
    users: state.users,
    cars: state.cars
  };
};

export default connect(mapStateToProps)(Dashboard);