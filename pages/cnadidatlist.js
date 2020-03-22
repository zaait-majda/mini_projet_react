
import React, { Component } from 'react';
import axios from 'axios';
export default class cnadidatlist extends React.Component{
    state={
        etudiant:[],
    };
    componentDidMount()
    {
        axios.get('http://localhost:3001/etudiants/getetudiants').then(res => {
        console.log(res);
        this.setState({etudiant : res.data});
    });
}
render(){
    return(
        <ul>
             {this.state.etudiant.map(etudiant => <li>{etudiant.lastname_fr}</li>)}
        </ul>
    )
}

}
