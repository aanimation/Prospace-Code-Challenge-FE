import initialState from './initialState';

export default function companiesReducer(state = initialState.companies, action) {
	switch(action.type) {
		/* Add company to the state array */
		case "ADD_COMPANY": {
			return {
				...state,
				companyList: [...state.companyList, state.newCompany]
			}
		}
		
		case "COMPANY_HANDLE_INPUT_CHANGE": {
			return {
				...state, newCompany: {
					...state.newCompany, ...action.payload
				}
			}
		}

		case "COMPANY_HANDLE_DELETE": {
			return state.companyList.map( item =>
				item.id === action.id ? { ...item, removed: true } : item
			)
		}

		default: return state;
	}
}