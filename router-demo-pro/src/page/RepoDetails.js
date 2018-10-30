import React, {Component} from 'react'
import 'whatwg-fetch'
import 'babel-polyfill'

export default class RepoDetails extends Component{
    constructor(){
        super(...arguments)
        this.state = {
            repository: []
        }
    }

    renderRepository(){
        let repository = this.props.repositories.find((repo) => repo.name === this.props.params.repo_name)
        let stars = [];
        for(let i = 0; i < repository.stargazers_count; i++){
            stars.push('★')
        }
        return(
            <div>
                <h1>I am RepoDetails</h1>
                <h2>{repository.name}</h2>
                <p>{repository.description}</p>
                <span>{stars}</span>
            </div>
        )
    }

    render(){
        if(this.props.repositories.length > 0){
            return this.renderRepository()
        }else{
            return <h4>Loading</h4>
        }
    }
}