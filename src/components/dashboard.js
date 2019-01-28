import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

export class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-header">
                    <h1>SpanishX</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

// export default requiresLogin()(connect(mapStateToProps)(Dashboard));
export default connect(mapStateToProps)(Dashboard)