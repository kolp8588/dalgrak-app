import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as dalgrakActions } from "../../redux/modules/dalgrak";


const mapStateToProps = (state, ownProps) => {
  const {
    dalgraks: { feed },
  } = state;

  return {
    feed,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    submit: (dalgrakId, id) => {
      return dispatch(dalgrakActions.successfulBid(dalgrakId, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
