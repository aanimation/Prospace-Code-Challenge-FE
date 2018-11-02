import initialState from './initialState';

export default function officesReducer(state = initialState.offices, action) {
	switch(action.type) {
		
		/* Add offices to the state array */
		case "ADD_OFFICE": {
			return {
				...state, officesList: [...state.officesList, state.newOffice]
			}
		}
		
		/* Handle input for the office form. The payload (input changes) gets merged with the newOffice object */
		case "OFFICE_HANDLE_INPUT_CHANGE": {
			return {
				...state, newOffice: {
					...state.newOffice, ...action.payload }
			}
		}

		default: return state;
	}
}