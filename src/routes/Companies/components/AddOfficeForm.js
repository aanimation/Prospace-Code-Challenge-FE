import React, { Component } from 'react';
 
class AddOfficeForm extends Component {
	constructor(props){
		super(props)

		this.state = { 
			field : { name: '', lat: '', long: '', startdate: '', cid: '' },
			btnDisabled: true 
		}

		this.resetForm = this.resetForm.bind(this)
		this.validate = this.validate.bind(this);
	}

	resetForm() {
		this.refs.formoffice.reset()
  	}

  	validate(e) {
  		const target = e.target;
		const value = target.value;
		const name = target.name;
		
  		this.setState(
  			fState => ({
				field: { ...fState.field, [name]: value }
			})
		)

		this.setState({ btnDisabled : (Object.values(this.state.field).indexOf('') > -1) })
  	}

	render() {

		const { onInputChange, onFormSubmit, companies } = this.props
		const disabled = this.state.btnDisabled
		
		return(
			<form className="form-horizontal text-left" ref="formoffice">
				<div className="form-row">
					<div className="form-group col-md-12 mb-1">
						<label className="font-weight-bold mb-0">Name:</label>
						<input type="text" className="form-control" placeholder="name" name="name" onChange={(e) => onInputChange(e, (e) => this.validate(e))} />
					</div>
					<div className="form-group col-md-12 mb-1">
						<label className="font-weight-bold mb-0">Location:</label>
						<div className="row">
							<div className="col-md-6 pr-1">
								<input type="number" className="form-control" placeholder="latitude" name="lat" onChange={(e) => onInputChange(e, (e) => this.validate(e))} />
							</div>
							<div className="col-md-6 pl-0">
								<input type="number" className="form-control" placeholder="longitude" name="long" onChange={(e) => onInputChange(e, (e) => this.validate(e))} />
							</div>
						</div>
					</div>
					<div className="form-group col-md-12 mb-1">
						<label className="font-weight-bold mb-0">Office Start Date:</label>
						<input type="text" className="form-control" placeholder="ex:18/18/2018" name="startdate" onChange={(e) => onInputChange(e, (e) => this.validate(e))} />
					</div>
					<div className="form-group col-md-12 mb-1">
						<label className="font-weight-bold mb-0">Company:</label>
						<select className="custom-select" onChange={(e) => onInputChange(e, (e) => this.validate(e))} id="inlineFormCustomSelectPref" name="cid">
							<option>{ companies.length ? 'select company' : 'please add a company' }</option>
							{ companies.length ? companies.map( (item, key) => 
								<option key={key} value={item.id}>
									{item.name}
								</option>
							) : ''}
						</select>
					</div>
				</div>
				<button type="submit" onClick={(e) => onFormSubmit(e, this.resetForm)} className="btn btn-secondary btn-lg btn-block mt-3" disabled={disabled}>Create</button>
			</form>
		)
	}
}
 
export default AddOfficeForm;