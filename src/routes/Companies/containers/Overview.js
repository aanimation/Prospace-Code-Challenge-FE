import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddItem from './AddItem';
import Detail from './Detail';
import ItemsList from '../components/ItemsList';
import { setDetailId, isCompanyOveriew, removeCompany } from '../actions';

function mapStateToProps(state) {
	return {
		detailId : state.datas.ui.detailId,
		isOverview : state.datas.ui.isOverviewShow,
		companyListData : state.datas.companies.companyList.filter(obj => { return !obj.removed }),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onToggleOverview: () => {
		  dispatch(isCompanyOveriew());
		},
		onSetId: (id) => {
		  dispatch(setDetailId(id));
		},
		onRemove: (id) => {
		  dispatch(removeCompany(id));
		},
	}
}

class Overview extends Component {
	constructor(props) {
		super(props);

		this.companiesList = this.companiesList.bind(this);
		this.handleSetId = this.handleSetId.bind(this);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
	}

	handleSetId(id, desc) {
		const { onSetId, onToggleOverview, onRemove }  = this.props;
		if(desc === 'set'){
			onSetId(id);
			onToggleOverview();
		}else{
			//quick remove
			this.handleRemoveItem(id)
		}
	}

	handleRemoveItem(id) {
		// onRemove(id); //inprogress

		// this.props.companyListData.splice( this.props.companyListData.indexOf(obj => { return obj.id === id }), 1 );
	}

	companiesList() {
		return this.props.companyListData;
	}

	renderOverview() {
		return (
			<div className="row mb-0">
				<div className="col-md-6">
					<AddItem getForm="company" />
				</div>
				<div className="col-md-6">
					<AddItem getForm="office" />
				</div>
				<div className="col-md-12 text-left mb-4">
					<h3>Companies</h3>
				</div>
				<div className="col-md-12 mb-4">
					{ 
						this.companiesList().length ?
						<ItemsList dataList={ this.companiesList() } show="company" onSetCompany={ (id, desc) => this.handleSetId(id, desc) } /> :
						<label>there is no companies created yet</label>
					}
				</div>
			</div>
		)
	}
 
	render() {
		return (
			<div>
				{ this.props.isOverview ? this.renderOverview() : <Detail onClickBack={ this.props.onToggleOverview } /> }
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (Overview);