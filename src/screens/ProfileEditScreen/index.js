import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { 
    submitProfile: (userProfile) => {
    return dispatch(dalgrakActions.submitProfile(userProfile));
  },
};
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
