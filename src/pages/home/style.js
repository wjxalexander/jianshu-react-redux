import styled from "styled-components";

export const HomeWarpper = styled.div`
  width: 960px;
  margin: 0 auto;
  &.clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
`;
export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-image {
    width: 625px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  margin-left: 15px;
  padding-top: 30px;
  float: right;
`;

export const TopicWraper = styled.div`
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
  &.clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-bottom: 10px;
  .topic-pic {
    display: block;
    float: left;
    height: 30px;
    margin-right: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .description {
    font-size: 13px;
    line-height: 18px;
    color: #999;
  }
`;
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  &.clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .list-pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px auto;
  width: 280px;
`;
export const RecommendItem = styled.a`
  display:block;
  width:280px;
  height:50px;
  background:url(${(props)=>props.imgURL});
  background-size:contain
`;
