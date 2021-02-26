import React, { Component } from 'react'

import {Fragment} from 'react'
import './main.css'
import Result from "./Result";


export class main extends Component {
  constructor(props) {
    super(props);
  this.state = {
    searchstring : '',
    
    Resultdata:[],
    isLoading: true,
    error: null
  };
  this.handleChange = this.handleChange.bind(this);
  this.fetchnewsapi = this.fetchnewsapi.bind(this);
}
handleChange(e) {
  this.setState({searchstring: e.target.value});
}
fetchnewsapi(e){
  e.preventDefault();
  console.log(this.state.searchstring);
  const apiUrl = 'https://newsapi.org/v2/everything?language=en&apiKey=3917467c968d441fb90e8959f83eb680&q='+this.state.searchstring ;

   fetch(apiUrl)
   .then((response) => response.json())
   .then(data =>
    this.setState({
      Resultdata: data,
      isLoading: false,
    })
    
  )
  // Catch any errors we hit and update the app
  .catch(error => this.setState({ error, isLoading: false }));
 }
    render() {
        return (
          <Fragment>
            <header className="navbar headercolor">
          
            <img src=" https://img01.bt.co.uk/s/assets/191120/images/logo/logo-2018.svg" width="50" height="50" className="d-inline-block align-top" alt=""/>
          </header>
          <div className="text-center body-fontcolor">
            {/* <h1>BT React Code Test - by Sai Keerthi</h1> */}
             <h5 className="m-2">Retrive Data from NewsApi</h5>
            <form onSubmit = {this.fetchnewsapi}>
                    <input type = 'text' placeholder = 'Enter Keyword Ex:Tesla' value={this.state.searchstring}  onChange={this.handleChange}></input>
                    <input type = 'submit' placeholder='Submit' value = 'Submit'></input>
           </form>
         </div>
          <Result testing={this.state}/>
          
          <div className="footer">
            <p>Copyright@2021</p>
        </div>
          </Fragment>
          
        )
    }
}

export default main
