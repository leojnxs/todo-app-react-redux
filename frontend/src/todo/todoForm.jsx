import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { add, changeDescription, clear, search } from './todoActions'

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
        const { search, add, clear, description } = this.props

        if(description)
        {
            if(event.key == 'Enter') {
                event.shiftKey ? search() : add(description)
            } else if(event.key == 'Escape') {
                clear()
            }
        }
    }

    render() {
        const { search, add, changeDescription, clear, description } = this.props

        return (
            <div role="form" className="todoForm">
                <div className="col-xs-10">
                    <input type="text" id="description" className="form-control" placeholder="Add task" value={description} onChange={changeDescription} onKeyUp={this.keyHandler} />
                </div>
                <div className="col-xs-2 text-right">
                    <IconButton style="primary" icon="plus" onClick={() => add(description)}></IconButton>
                    <IconButton style="info" icon="search" onClick={search}></IconButton>
                    <IconButton style="deafult" icon="close" onClick={clear}></IconButton>
                </div>
            </div>
        )
    }
}

// Bind component state to use the reducers.
const mapStateToProps = state => ({ description: state.todo.description })

// Bind the actions with the reducers.
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, clear, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)