import React, { useState } from 'react';
import { connect } from 'react-redux';
const Dashboard = (props) => {
    return (
        <div className="wrap">
            <h1>{`Welcome ${props.userDetails.username}`}</h1>
            <p>{` ${props.userDetails.date}`}</p>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        userDetails: state.login.userDetails,
    }
}
export default connect(mapStateToProps, null)(Dashboard);

