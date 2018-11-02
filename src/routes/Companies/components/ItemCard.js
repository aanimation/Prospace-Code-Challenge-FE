import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCard extends Component {
	render() {
		const { item, show, onClickCard } = this.props
		const divStyle = { cursor: show === 'company' ? 'pointer' : 'auto' };

		return(
			<div className="card text-left mb-4" style={divStyle}>
				<button type="button" className="close top-right" title="remove" aria-label="Close" onClick={show === 'company' ? () => onClickCard(item.id, 'del') : null}>
					<span aria-hidden="true">&times;</span>
				</button>
				<div className="card-header p-1 pl-3" onClick={show === 'company' ? () => onClickCard(item.id, 'set') : null}>
					<h4 className="text-capitalize">{item.name}</h4>
				</div>
			{ show === 'company' ?
				<div className="card-body">
					<h5 className="card-title mb-0">Address:</h5>
					<p className="card-text">{item.address}</p>
					<h5 className="card-title mb-0">Revenue:</h5>
					<p className="card-text">{item.revenue}</p>
					<h5 className="card-title mb-0">Phone No:</h5>
					<p className="card-text">({item.phonecode}) {item.phonenum}</p>
				</div> :
				<div className="card-body">
					<h5 className="card-title mb-0">Location:</h5>
					<p className="card-text">{item.lat} - {item.long}</p>
					<h5 className="card-title mb-0">Office Start Date:</h5>
					<p className="card-text">{item.startdate}</p>
				</div>
			}
			</div>
		)
	}
}

ItemCard.propTypes = {
	item: PropTypes.object.isRequired,
	show: PropTypes.string,
	onClickCard: PropTypes.func.isRequired
}
 
export default ItemCard;