import React, { Component, Fragment } from "react";
import { RecommendWrapper, RecommendItem } from "../style";
import { connect } from "react-redux";
class Recommend extends Component {
  render() {
    const { list } = this.props;
    console.log(list)

    return (
      <RecommendWrapper>
        {list.map(item => {
          return (
            <Fragment key={Math.random()}>
              <RecommendItem imgURL={item.get('imgURL')} />
            </Fragment>
          );
        })}
      </RecommendWrapper>
    );
  }
}
const mapStatetoProps = state => ({
  list: state.getIn(["home", "recommendList"])
});
const mapDispatchtoProps = null;
export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Recommend);
