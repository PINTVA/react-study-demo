import React, {Component} from 'react'

const styles = {
    root : {
        textAlign: 'center'
    },
    alert : {
        fontSize: 80,
        fontWeight: 'bold',
        color: '#e9ab2d'
    }
};

export default class ServerError extends Component{
    render(){
        return(
            <div style={styles.root}>
                <div styles={styles.alert}>
                    <h1>Ops, we have a problem</h1>
                    <p>Sorry, we could`t access the repositories. Please try again in a few moments.</p>
                </div>
            </div>
        )
    }
}