import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as dalgrakActions } from "../../redux/modules/dalgrak";

const mapStateToProps = (state, ownProps) => {
  const {
    dalgraks: { category },
  } = state;

  return {
    category,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCategories: (parent) => {
      return dispatch(dalgrakActions.getCategories(parent));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
