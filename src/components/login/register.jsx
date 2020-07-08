import React from "react";
import loginImg from "../../login.svg";
import {PostDataSignUp} from './../postData'

export class Register extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      returnSecureToken:true
    }
    this.signUp=this.signUp.bind(this);
    this.onChange=this.onChange.bind(this);
    }
    signUp(){
      PostDataSignUp(this.state).then((result)=>{
        let reponseJSON = result;
        console.log(reponseJSON)
      })
    }
 

 onChange(e){
   this.setState({[e.target.name]:e.target.value})
   
 }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Seller SignUp</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="sd" />
          </div>
          <div className="form">
            {/* <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
            </div> */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="Password" name="password" placeholder="password" onChange={this.onChange} />
            </div>
            {/* <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input type="Password" name="password" placeholder="Confirm your Password" />
            </div> */}
          </div>
        </div>
        <div className="footer">
          <button onClick={()=>this.signUp()} type="button" className="btn">
            SignUp
          </button>
        </div>
      </div>
    );
  }
}