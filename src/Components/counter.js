import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
const Counter = ({counter, inc, dec, rnd}) => {
    return(  <div className="back">
        <div className="number"><h1 id="counter">{counter}</h1></div>
        <div className="buttons">
            <button id="dec" onClick={dec} className="btn btn-primary"></button>
            <button id="inc" onClick={inc} className="btn btn-primary"></button>
            <button id="rnd" onClick={rnd} className="btn btn-primary"></button>
        </div>
    </div>
  )
};
const mapStateToProps = (state) =>{

    return{
        counter: state
    }
};

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators(actions, dispatch);

};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);