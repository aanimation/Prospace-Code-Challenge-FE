import initialState from './initialState';

export default function uiReducer(state = initialState.ui, action) {
	switch(action.type) {

		case "IS_COMPANY_OVERVIEW": {
			return {
				...state, isOverviewShow: !state.isOverviewShow
			}
		}

		case "SET_DETAIL": {
			return {
				...state, detailId: action.id
			}
		}

		case "GET_DETAIL": {
			return {
				...state, detailId: state.detailId
			}
		}
		
		default: return state;
	}
}
