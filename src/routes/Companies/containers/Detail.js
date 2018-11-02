import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ItemsList from '../components/ItemsList';
import {isCompanyOveriew} from '../actions';

function mapStateToProps(state) {
	return {
		com : state.datas.companies.companyList.find(obj => { return obj.id === state.datas.ui.detailId }),
		officeListData : state.datas.offices.officesList.filter(obj => { return obj.cid === state.datas.ui.detailId+'' }),
	}
}

class Detail extends Component {
	render() {
		const { com, officeListData, onClickBack } = this.props

		return(
			<div className="row mb-0 justify-content-center">
				<div className="col-md-8 text-left mb-4">
					<div className="card">
						<div className="card-header">
							<h4>{com.name}</h4>
						</div>
						<div className="card-body">
							<h5 className="card-title mb-0">Address:</h5>
							<p className="card-text">{com.address}</p>
							<h5 className="card-title mb-0">Revenue:</h5>
							<p className="card-text">{com.revenue}</p>
							<h5 className="card-title mb-0">Phone No:</h5>
							<p className="card-text">({com.phonecode}) {com.phonenum}</p>
							<div className="col-md-4 float-md-right">
								<button onClick={onClickBack} className="btn btn-secondary btn-block mt-3">Overview</button>
							</div>
						</div>
					</div>
					<div className="col-md-12 text-left mb-4 mt-4">
						<h3>Offices</h3>
					</div>
					<div className="col-md-12 mb-4">
						{
							officeListData.length ? 
							<ItemsList dataList={ officeListData } show="office" /> :
							<label>there is no offices created yet for <b>{com.name}</b></label>
						}
					</div>
				</div>
			</div>
		)
	}
}

Detail.propTypes = {
	com: PropTypes.object.isRequired,
	officeListData: PropTypes.array,
	onClickBack: PropTypes.func.isRequired,
}
 
export default connect(mapStateToProps, null) (Detail)