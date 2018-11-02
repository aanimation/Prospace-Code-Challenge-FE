

const initialState = {
    companies: {
    	companyList: [],
		newCompany: {
				id: '',
				name: '',
				address: '',
				revenue: '',
				phonecode: '',
				phonenum: '',
				removed: false,
			},
	},
	offices: {
    	officesList: [],
		newOffice: {
				name: '',
				lat: '',
				long: '',
				startdate: '',
				cid: '',
				removed: false
			},
	},
	ui: {
			isOverviewShow: true,
			detailId: null,
		}
}

export default initialState;