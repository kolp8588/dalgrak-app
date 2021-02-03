import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { 
    submitProfile: (userProfile) => {
    return dispatch(userActions.submitProfile(userProfile));
  },
};
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
