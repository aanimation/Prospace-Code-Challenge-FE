import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddCompanyForm from '../components/AddCompanyForm';
import AddOfficeForm from '../components/AddOfficeForm';
import {addCompany, addOffice, handleInputChangeCompany, handleInputChangeOffice, isCompanyOveriew, setDetailId, getDetailId} from '../actions';

function mapStateToProps(state) {
	return {
		detailId : state.datas.ui.detailId,
		isOverview : state.datas.ui.isOverviewShow,
		newCompany: state.datas.companies.newCompany,
		companies : state.datas.companies.companyList,
		newOffice: state.datas.offices.newOffice,
	}
}
 
function mapDispatchToProps(dispatch) {
	return {
		onFormSubmit: (newCompany) => {
		  dispatch(addCompany(newCompany));
		},
		onFormSubmitOffice: (newOffice) => {
		  dispatch(addOffice(newOffice));
		},
		onInputChangeCompany: (name,value) => {
		  dispatch(handleInputChangeCompany(name,value));
		},
		onInputChangeOffice: (name,value) => {
		  dispatch(handleInputChangeOffice(name,value));
		},
		onToggleOverview: () => {
		  dispatch(isCompanyOveriew());
		},
		onSetId: (id) => {
		  dispatch(setDetailId(id));
		},
		onGetId: () => {
		  dispatch(getDetailId());
		},
	}
}

class AddItem extends Component {
	constructor(props) {
		super(props);

		this.state = {id: null};
		
		this.showOverview = this.showOverview.bind(this);
		this.handleInputChangeCompany = this.handleInputChangeCompany.bind(this);
		this.handleInputChangeOffice = this.handleInputChangeOffice.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSubmitOffice = this.handleSubmitOffice.bind(this);
		this.handleSetId = this.handleSetId.bind(this);
	}

	showOverview() {
		const { onToggleOverview }  = this.props;
		onToggleOverview();
	}

	handleGetId() {
		const { onGetId }  = this.props;
		onGetId();
	}	

	handleSetId(id) {
		const { onSetId }  = this.props;
		onSetId(id);
	}
	
	handleInputChangeCompany(e, validateCheck) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
 
		const { onInputChangeCompany } = this.props;
		onInputChangeCompany(name, value);

		validateCheck(e);
	}

	handleInputChangeOffice(e, validateCheck) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
 
		const { onInputChangeOffice } = this.props;
		onInputChangeOffice(name, value);

		validateCheck(e);
	}
 
	handleSubmit(e, resetFormCallback) {
		e.preventDefault();

		this.props.newCompany.id = this.props.companies.length;
		this.props.onFormSubmit();

		resetFormCallback();
	}

	handleSubmitOffice(e, resetFormCallback) {
		e.preventDefault();
		
		this.handleSetId(parseInt(this.props.newOffice.cid));

		this.props.onToggleOverview();
		this.props.onFormSubmitOffice();

		resetFormCallback();
	}
	 
	renderForm() {
		return(
			<div className="card flex-md-row mb-2 box-shadow h-md-250 no-border">
				<div className="card-body d-flex flex-column align-items-start ml-2 mr-2">
					<h3 className="d-inline-block mb-2 text-default">Create {this.props.getForm}</h3>
				{ this.props.getForm === 'company' ?
					<AddCompanyForm onFormSubmit={this.handleSubmit} onInputChange={this.handleInputChangeCompany} /> :
					<AddOfficeForm onFormSubmit={this.handleSubmitOffice} onInputChange={this.handleInputChangeOffice} companies={this.props.companies} />
				}
				</div>
			</div>
		)
	}

	render() {
		return(
			<div>
				{ this.renderForm() }
			</div>
		)
	}
}
 
export default connect(mapStateToProps, mapDispatchToProps) (AddItem)