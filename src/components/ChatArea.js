import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import { connect } from 'react-redux';

// prevents from page reload when form submission
const handleSubmit = (e) => {
    e.preventDefault();
};

const ChatArea = (props) => {
    const placeholder = `Message @${props.patients.selectedPatient}`;
    return (
        <div className="col-sm-12 col-md-7 col-lg-7">
            <Tabs defaultIndex={2}>
                <TabList>
                    <Tab>Details</Tab>
                    <Tab>Messages</Tab>
                </TabList>

                <TabPanel>
                    <h2>Details here</h2>
                </TabPanel>
                <TabPanel>
                    <div className="message-area">
                        <h2>{props.patients.selectedPatient}</h2>
                        <div className="outer-msg">
                            <div className="msg">
                                <p>{props.patients.message}</p>
                            </div>
                            <div className="img">
                                <img src={`img/admin.jpg`} height={30} width={30}/>
                            </div>
                        </div>
                        <form className="input-group input-group-lg chat-form" onSubmit={handleSubmit}>
                            <input type="text" className="form-control input-lg chat" placeholder={placeholder} />
                            <span className="input-group-btn">
                                <button className="btn btn-default btn-lg" type="submit">Send</button>
                            </span>
                        </form>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
};

// destructuring only patients object from the state
const mapStateToProps = ({ patients }) => ({
    patients
});

export default connect(mapStateToProps)(ChatArea);