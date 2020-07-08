import React from "react";
import loginImg from "../../login.svg";
import {PostDataSignIn} from  './../postData.js'

export class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
    this.login=this.login.bind(this);
    this.onChange=this.onChange.bind(this);
    }
    login(){
      PostDataSignIn(this.state).then((result)=>{
        let reponseJSON = result;
        console.log(reponseJSON)
      })
    }
 

 onChange(e){
   this.setState({[e.target.name]:e.target.value})
  //  console.log(this.state)
 }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="sd" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="email"  name="email" placeholder="email" onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password"  name="password" placeholder="Password" onChange={this.onChange} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={()=>this.login()} type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
