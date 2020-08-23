import { connect } from "react-redux";
import AppContainer from "./presenter";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    profile: user.profile,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: () => {
      dispatch(userActions.getNotifications());
      dispatch(userActions.getOwnProfile());
      dispatch(userActions.registerForPush());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
