import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as dalgrakActions } from "../../redux/modules/dalgrak";

const mapStateToProps = (state, ownProps) => {
  const {
    dalgrak: { category },
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
    refreshStates: () => {
      return dispatch(dalgrakActions.refreshStates());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
