import React from 'react';
import "./LoginPage.css";
// import { timingSafeEqual } from 'crypto';

class LoginPage extends React.Component {
    
    constructor(props){
     super(props);
        this.state = {
            id : 'udit',
            password :'udit',
            userid:'',
            userpass:''
        } 
        this.updateUser=this.updateUser.bind(this);
        this.updatePass=this.updatePass.bind(this);
    }

       clickListener = () =>{
              console.log('clicked');  
              console.log('user', this.state.userid);
              console.log('pass',this.state.userpass);
              
              if(this.state.id===this.state.userid&&this.state.password===this.state.userpass){
                {this.props.validate()}
                  console.log(" validated");
              }

              else{
                  console.log("wrong credentials");
              }

       }

       updateUser = (evt) => {
        console.log('check1');
           this.setState({
             userid : evt.target.value
           });
       }

       updatePass = (evt) =>{
           console.log('check2');
             this.setState({
                userpass : evt.target.value
             });
       }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">

                    <div className="col-7 Left">
                        
                        {/* <img className="center" src={require('./logo1.png')} alt="logo" height="42" width="42"/> */}
                        
                    </div>

                    <div className="col-5 Right ">

                    <div className = "bg-image">

                    </div>
                    
                      <div className = "container-fluid bg-text">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.updateUser}/>
                            </div>


                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.updatePass}/>
                             </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember Me !</label>
                            </div>
                          
                      
                            
                        </form>

                        <button  class="ui inverted button" onClick={this.clickListener} /*onClick={this.props.validate(this.state.userid,this.state.userpass)}*/>Login</button>
                    
                    </div>
                   </div>
                </div>
            </div>


        );
    }
}

export default LoginPage;