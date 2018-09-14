import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <p className="below-header">Patients</p>
                <Dashboard/>
            </div>
        )
    }
}

export default App;