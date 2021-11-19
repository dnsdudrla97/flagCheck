import React, {useState, Fragment,} from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {sendFlag} from '../../redux/flag/flag.actions';
import {actionFlag, actionFlagError} from '../../redux/flag/flag.reducer';
import {setAlert} from '../../redux/alert/alert.actions';

// import './flag.styles.scss';

const FlagPage = ({dispatchAddFlag, dispatchFlagError, path}) => {
	const dispatch = useDispatch();
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
				dispatchAddFlag(res);
				setFlagData({flag: ''});
			})
			.catch(err => {
				dispatchFlagError(err);
				dispatch(setAlert(String(err), 'danger'));
			});	// error trigger
	};
	const resetOnClick = (e) => {
		e.preventDefault();
		setFlagData({flag: ''});

	}
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
                	<button type="reset" onClick={resetOnClick}>RESET</button>
                	<button type="submit">SUBMIT</button>
            	</section>
        	</form>
    	</Fragment>		
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		dispatchAddFlag: (post) => dispatch(actionFlag(post)),
		dispatchFlagError: (err) => dispatch(actionFlagError(err)),
	
	}
}
export default connect(null, mapDispatchToProps)(FlagPage);
