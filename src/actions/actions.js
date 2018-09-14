export const fetchCurrentPatient = (patient) => dispatch => {
    dispatch({
        type: 'SET_CURRENT_PATIENT',
        payload: patient
    });
};