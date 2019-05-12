import React from 'react'
import {Dashboard} from '../../components/Dashboard'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    decks: state.decks
})

const mapDispatchToProps = undefined

export default connect(
    mapStateToProps,
    mapDispatchToProps,    
)(Dashboard)