import React from 'react';
import Verified from './Verified';
import NotVerified from './NotVerified';
import UpdateRequested from './UpdateRequested';

// the state object maintains the state of the buttons clicked
class Patients extends React.Component {
    state = {
        showVerifiedComponent: true,
        showNotVerifiedComponent: false,
        showUpdateComponent: false
    };
    onVerifiedClick = () => {
        this.setState({
            showVerifiedComponent: true,
            showNotVerifiedComponent: false,
            showUpdateComponent: false
        });
    };
    onNotVerifiedClick = () => {
        this.setState({
            showVerifiedComponent: false,
            showNotVerifiedComponent: true,
            showUpdateComponent: false
        });
    };
    onUpdateClick = () => {
        this.setState({
            showVerifiedComponent: false,
            showNotVerifiedComponent: false,
            showUpdateComponent: true
        });
    };
    render() {
        let verifiedButton = this.state.showVerifiedComponent ? "is-active first" : "light first";
        let notVerifiedButton = this.state.showNotVerifiedComponent ? "is-active" : "light";
        let updateButton = this.state.showUpdateComponent ? "is-active last" : "light last";
        return (
            <div className="col-sm-12 col-md-5 col-lg-5">
                <div className="button-group">
                    <button className={verifiedButton} onClick={this.onVerifiedClick}>Verified</button>
                    <button className={notVerifiedButton} onClick={this.onNotVerifiedClick}>Not Verified</button>
                    <button className={updateButton} onClick={this.onUpdateClick}>Update Requested</button>
                    {this.state.showVerifiedComponent ?
                        <Verified /> :
                        null
                    }
                    {this.state.showNotVerifiedComponent ?
                        <NotVerified /> :
                        null
                    }
                    {this.state.showUpdateComponent ?
                        <UpdateRequested /> :
                        null
                    }
                </div>
            </div>
        );
    }
}

export default Patients;