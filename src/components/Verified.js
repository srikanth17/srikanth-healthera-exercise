import React from 'react';
import { connect } from 'react-redux';
import Patient from './Patient';
import { fetchCurrentPatient } from '../actions/actions';

// preselects the first patient when the component mounts
class Verified extends React.Component {
    componentDidMount() {
        this.props.fetchCurrentPatient(this.props.patients.list[0]);
    }
    handleClick = (e) => {
        this.props.fetchCurrentPatient(e.currentTarget.dataset.id);
    };
    handleSubmit = (e) => {
        e.preventDefault();
    };
    render() {
        return (
            <div style={{ marginTop: '30px' }}>
                <form className="input-group input-group-lg" onSubmit={this.handleSubmit}>
                    <input type="text"
                           className="form-control"
                           placeholder="Search for a patient"
                           style={{ minHeight: '40px' }}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-lg search" type="submit">Search</button>
                    </span>
                </form>
                <div className="card">
                    <ul className="list-group list-group-flush">
                        {this.props.patients.list.map((patient) => {
                            return (
                                <li onClick={this.handleClick}
                                    data-id={patient}
                                    key={patient}
                                    className="list-group-item"
                                >
                                    <Patient name={patient}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ patients }) => ({
    patients
});

// dispatching action to the store stating the selected patient
const mapsDispatchToProps = (dispatch) => ({
    fetchCurrentPatient: (patient) => dispatch(fetchCurrentPatient(patient))
});

export default connect(mapStateToProps, mapsDispatchToProps)(Verified);