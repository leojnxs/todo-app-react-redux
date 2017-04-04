import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { changeDescription, search } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    // This method is used to create some keyboard shortcuts to search, add and clear methods.
    keyHandler(event) {
        if(event.key == 'Enter') {
            event.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if(event.key == 'Escape') {
            props.handleClear()
        }
    }

    render() {
        return (
            <div role="form" className="todoForm">
                <div className="col-xs-10">
                    <input type="text" id="description" className="form-control" placeholder="Add task" value={this.props.description} onChange={this.props.changeDescription} onKeyUp={this.keyHandler} />
                </div>
                <div className="col-xs-2 text-right">
                    <IconButton style="primary" icon="plus" onClick={this.props.handleAdd}></IconButton>
                    <IconButton style="info" icon="search" onClick={this.props.handleSearch}></IconButton>
                    <IconButton style="deafult" icon="close" onClick={this.props.handleClear}></IconButton>
                </div>
            </div>
        )
    }
}

// Bind component state to use the reducers.
const mapStateToProps = state => ({ description: state.todo.description })

// Bind the actions with the reducers.
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)