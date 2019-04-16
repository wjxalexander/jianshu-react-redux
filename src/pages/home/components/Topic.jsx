import React, { Component, Fragment } from "react";
import { TopicWraper, TopicItem } from "../style";
import { connect } from "react-redux";

class Topic extends Component {
  render() {
    return (
      <TopicWraper className="clearfix">
        {this.props.topicList.map(item => {
          return (
            <TopicItem key={item.get('id')}>
              <img
              className = "topic-pic" 
              src={item.get('imgURL')} />
              {item.get("title")}
            </TopicItem>
          );
        })}
      </TopicWraper>
    );
  }
}
const mapStateToProps = state => ({
  topicList: state.getIn(["home", "topicList"])
});
const mapDispatchToprops = null;
export default connect(
  mapStateToProps,
  mapDispatchToprops
)(Topic);
