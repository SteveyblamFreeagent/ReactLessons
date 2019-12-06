import React from 'react';
import style from './index.module.css';
import { connect } from 'react-redux';
import  { increment } from '../../actions/actionTypes';

function Increment({onClick}) {
    return (
      <input type="button" value="+" className={style.counter} onClick={onClick} /> 
    )
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => {
      dispatch(increment(1))
    }
  };
}


export default connect(
  () => {return {}},
  mapDispatchToProps
)(Increment);



