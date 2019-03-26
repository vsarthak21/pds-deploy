import React from 'react';


 class SearchBar extends React.Component {
      state={term: ''};
     onFormSubmit(event){
       event.preventdefault();
     }
     
   render(){
        return (
       
             <div className="ui segment" style={{backgroundColor:"cyan"}}>
             <form onSubmit={this.onFormSubmit} className="ui-form">
             <div className="field" >
             <label><strong><i>Search &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i></strong></label>

             <input type="text" className="ui-form"
             value={this.state.term}
             onChange={(e) => this.setState({term:e.target.value})}/>
             </div>
             </form>
             
             
             
    
  </div>
        )}}
    
    export default SearchBar;