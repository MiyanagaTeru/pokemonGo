import React from 'react'
import { connect } from 'react-redux'

import { asyncSaveData } from '../actions'

const SaveData = ({ data, onButtonClick }) =>
	<button onClick={ e => onButtonClick(data) }>
		Save Data
	</button>

const mapStateToProps = state => ({
	data: state
})

const mapDispatchToProps = dispatch => ({
	onButtonClick: data => {
		dispatch(asyncSaveData(data))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(SaveData)