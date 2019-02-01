import React from 'react';
import {connect} from 'react-redux';

import {fetchProgress} from '../actions/questions'

export class NavBar extends React.Component {
    render() {
        return (
            <div className="progress">
                <button onClick={() => {
                    this.props.dispatch(fetchProgress());
                    console.log('progress: ', this.props.progress)
                }}>Progress</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        
    };
};

export default connect(mapStateToProps)(NavBar);