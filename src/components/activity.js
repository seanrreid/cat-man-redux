import React from "react";

import { connect } from "react-redux";

import { catAction } from "../redux/actions";

const Activity = ({ activity, catAction }) => {
  return (
    <>
      <h2>The cat is: {activity}</h2>
      <button onClick={() => catAction("eating")}>Eating</button>
      <button onClick={() => catAction("sleeping")}>Sleeping</button>
      <button onClick={() => catAction("playing")}>Playing</button>
    </>
  );
};

const mapStateToProps = state => {
  const { activity } = state;
  return activity;
};

export default connect(
  mapStateToProps,
  { catAction }
)(Activity);
