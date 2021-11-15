import React, {useState, Fragment,} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {sendFlag} from '../../redux/flag/flag.actions';
import {actionFlag} from '../../redux/flag/flag.reducer';

// import './flag.styles.scss';

const FlagPage = ({dispatchAdd, path}) => {
	const [ flagData, setFlagData ] = useState({
		flag: '',
	});
	const {flag} = flagData;
	const onChange = e =>  {
		console.log(e.target.value);
		setFlagData(
		{
			...flagData,
			[e.target.name]: e.target.value
		}
	);
	}
	const onSubmit = async (e) => {
		e.preventDefault();
		sendFlag({flag}, path)
			.then(res => {
				dispatchAdd(res);
				setFlagData({flag: ''});
			})
			.catch(err => err);	// error trigger
	};
	return <Fragment>
		<form
			onSubmit = {e=>onSubmit(e)}
			encType='application/x-www-form-urlencoded'>
			<input
				type="text"
				name="flag"
				value={flag}
				onChange={e=>onChange(e)}
				id='flag'
				placeholder="MVP{FAKE_FLAG}"
				required
			/>
            	<section className="profile-form-button-action">
                	<button type="reset" onClick={()=>window.location.replace=`/flag`}>RESET</button>
                	<button type="submit">SUBMIT</button>
            	</section>
        	</form>
    	</Fragment>		
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		dispatchAdd: (post) => dispatch(actionFlag(post)),
	}
}
export default connect(null, mapDispatchToProps)(FlagPage);
