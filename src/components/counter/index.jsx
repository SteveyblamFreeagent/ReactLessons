import React from 'react';
import style from './index.module.css';
import { connect } from 'react-redux';

function Counter({ value }) {
    return (
        <div className={style.counter}>{value}</div>  
    )
}

function mapStateToProps(state) {
    return {
        value: state.count.value
    };
}
  
export default connect(
    mapStateToProps,
)(Counter);



