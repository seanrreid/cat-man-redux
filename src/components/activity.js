import React from "react";

import { connect } from "react-redux";

import { eat, sleep, play } from "../redux/actions";

const Activity = ({ activity, eat, sleep, play }) => {
  return (
    <>
      <h2>The cat is: {activity}</h2>
      <button onClick={() => eat()}>Eating</button>
      <button onClick={() => sleep()}>Sleeping</button>
      <button onClick={() => play()}>Playing</button>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    eat: () => dispatch(eat()),
    sleep: () => dispatch(sleep()),
    play: () => dispatch(play())
  };
};

const mapStateToProps = state => {
  const { activity } = state;
  return activity;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity);
