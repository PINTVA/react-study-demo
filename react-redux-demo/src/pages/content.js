import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ThemeSwitch from './themeSwitch'

class Content extends Component{
    static propTypes = {
        themeColor: PropTypes.string
    }

    render(){
        return(
            <div>
                <h2 style={{ color: this.props.themeColor }}>I am Content</h2>
                <ThemeSwitch></ThemeSwitch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

Content = connect(mapStateToProps)(Content)

export default Content