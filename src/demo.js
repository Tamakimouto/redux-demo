import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from './redux/actions';

const Demo = (props) => (
    <div>
        <p>Try typing... {props.input}</p>
        <input
            value={props.input}
            onChange={(e) => props.setInput(e.target.value)}
        />
    </div>
);

/* Pull out what you need from redix for this component and put them in props */
const mapStateToProps = (state) => ({
    input: state.app.input
});

/* Get any actions you need and put them in props */
// bindActionCreators takes your action and wraps a dispatch function around it.
// I think of dispatching an action as inputting something into a state machine (your reducer)
// The state machine takes the input and outputs a new state.
const mapDispatchToProps = (dispatch) => bindActionCreators({
    setInput: Actions.userInput
}, dispatch);

/* Plug this component into the redux box */
export default connect(mapStateToProps, mapDispatchToProps)(Demo);
