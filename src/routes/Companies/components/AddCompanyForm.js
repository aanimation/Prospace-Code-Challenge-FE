import React, { Component } from 'react';

class AddCompanyForm extends Component {
	constructor(props){
		super(props)

		this.state = { 
			field : { name: '', address: '', revenue: '', phonecode: '', phonenum: '' },
			btnDisabled: true 
		}

		this.resetForm = this.resetForm.bind(this)
		this.validate = this.validate.bind(this);
	}

	resetForm() {
		this.refs.form.reset()
  	}

  	validate(e) {
  		const target = e.target;
		const value = target.value;
		const name = target.name;

		// const phcode = (value && name === 'phonecode' && target.validity.valid);
		// const phnum = (value && name === 'phonenum' && target.validity.valid);

  		this.setState(
  			fState => ({
				field: { ...fState.field, [name]: value }
			})
		)

		this.setState({ btnDisabled : (Object.values(this.state.field).indexOf('') > -1) })
  	}

	render() {
		
		const {onInputChange, onFormSubmit} = this.props
		const disabled = this.state.btnDisabled

		return(
			<form className="form-horizontal text-left" ref="form">
				<div className="form-row">
					<div className="form-group col-md-12 mb-1">
						<label className="font-weight-bold mb-0">Name:</label>
						<input type="text" name="name" className="form-control" onChange={(e) => onInputChange(e, (e) => this.validate(e))} placeholder="name" />
					</div>
					<div className="form-group col-md-12 mb-1">
						<label className="font-weight-bold mb-0">Address:</label>
						<input type="text" name="address" className="form-control" onChange={(e) => onInputChange(e, (e) => this.validate(e))} placeholder="address" />
					</div>
					<div className="form-group col-md-12 mb-1">
						<label className="font-weight-bold mb-0">Revenue:</label>
						<input type="number" name="revenue" className="form-control" onChange={(e) => onInputChange(e, (e) => this.validate(e))} placeholder="revenue" min="0" />
					</div>
					<div className="form-group col-md-12 mb-1">
						<label className="font-weight-bold mb-0">Phone No:</label>
						<div className="row">
							<div className="col-md-3 pr-1">
							<input type="number" name="phonecode" className="form-control" onChange={(e) => onInputChange(e, (e) => this.validate(e))} placeholder="code" />
							</div>
							<div className="col-md-9 pl-0">
								{/* type="text" pattern="[0-9]*" */}
								<input type="number" name="phonenum" className="form-control" onChange={(e) => onInputChange(e, (e) => this.validate(e))} placeholder="number" />
							</div>
						</div>
					</div>
				</div>
				<button type="submit" onClick={(e) => onFormSubmit(e, this.resetForm)} className="btn btn-secondary btn-lg btn-block mt-3" disabled={disabled}>Create</button>
			</form>
		)
	}
}
 
export default AddCompanyForm;