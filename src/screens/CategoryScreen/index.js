import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as dalgrakActions } from "../../redux/modules/dalgrak";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCategories: (depth, parent) => {
      return dispatch(dalgrakActions.getCategories(depth, parent));
    },
  };
};

export default connect(null, mapDispatchToProps)(Container);
