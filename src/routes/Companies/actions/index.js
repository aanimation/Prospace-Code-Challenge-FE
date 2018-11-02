export const addCompany = () => {
    return {
		type: "ADD_COMPANY",		
	}
}

export const addOffice = () => {
    return {
		type: "ADD_OFFICE",		
	}
}

export const handleInputChangeCompany = (name, value) => {
	return {
		type: "COMPANY_HANDLE_INPUT_CHANGE",
		payload: { [name]: value}
	}
}

export const handleInputChangeOffice = (name, value) => {
	return {
		type: "OFFICE_HANDLE_INPUT_CHANGE",
		payload: { [name]: value}
	}
}

export const isCompanyOveriew = () => {
	return {
		type: "IS_COMPANY_OVERVIEW",
	}
}

export const setDetailId = (id) => {
	return {
		type: "SET_DETAIL",
		id: id
	}
}

export const getDetailId = () => {
	return {
		type: "GET_DETAIL",
	}
}

export const removeCompany = (id) => {
	return {
		type: "COMPANY_HANDLE_DELETE",
		id: id
	}
}

export const removeOffice = (id) => {
	return {
		type: "OFFICE_HANDLE_DELETE",
		id: id //seharusnya ada id atau pakai name
	}
}