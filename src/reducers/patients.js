const initialState = {
    list: ['Sichen Liu', 'Pop King', 'gerfrgerjnk'],
    message: 'Welcome to Chop Leg Pharmacy, you can now book our services and order repeat prescriptions. Message us here if you have any other questions, enjoy!',
    selectedPatient: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PATIENT':
            return {
                ...state,
                selectedPatient: action.payload
            };
        default:
            return state;
    }
};