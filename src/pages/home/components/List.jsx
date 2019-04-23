import React, { Component, Fragment } from "react";
import { ListItem, ListInfo } from "../style";
import { connect } from "react-redux";
class List extends Component {
  render() {
    const { list } = this.props;
    console.log(this.props);
    return (
      <div>
        {list.map(item => {
          return (
            <ListItem
              key={Math.random()}
              className="clearfix"
            >
              <img className="list-pic" src={item.get("imgURL")} />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="description">{item.get("description")}</p>
              </ListInfo>
            </ListItem>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  list: state.getIn(["home", "articleList"])
});
const mapDispatchToProps = null;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
