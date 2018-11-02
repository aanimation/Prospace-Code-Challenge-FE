import React from 'react';
import ItemCard from './ItemCard';

const ItemsList = (props) => {
	return( 
		<div className="row">
			{ props.dataList.map( (item, key) => 
				<div key={key} className="col-md-6">
					<ItemCard item={ item } show={ props.show } onClickCard={ (id, desc) => props.onSetCompany(id, desc) } />
				</div>
			)}
		</div>
	)
}
 
export default ItemsList;