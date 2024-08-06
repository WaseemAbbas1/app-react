import React,{useState} from "react";

export default function User() {
  let initialValue = {email: "", password: ""}
    const [state,setState] = useState(initialValue)
  const {email, password} = state
  
  
  
    // const [userName, setUserName]= useState("")
    // const [password, setPassword]= useState("")
    
    
    // let userName = "waseem"
    // let password = "1234567"

    const handleChange = (e)=>{
      setState({...state, [e.target.name]: e.target.value})
      // console.log(state)
    }
    const handleSubmit=()=>{
   if(!email){
    alert('please enter your email')
    return
   }
   if(password.length < 6){
    alert('please enter strong [password')
    return
  }
  console.log(email)
  console.log(password)
 }
    return (
    <>
      <div className="py-5 mt-5">
        <div className="container">
          <div className="row mb-5 ">
            <div className="col">
              <h1 className="text-center mb-3">Login Page</h1>
                 {/* <p className="text-center">Username = {email}</p>
                <p className="text-center">password = {password}</p>*/ } 
                </div> 
          </div>
          <div className="row ">
            <div className="col-12 col-mb-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="card px-3 py-4">
                <div className="row">
                  <div className="col-12 mb-4 mt-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      name="email"
                      // onChange={(e)=>{setState({ ...state, email:e.target.value})}}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12  mb-4">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter you password"
                      name="password"
                      onChange={handleChange}
                    //  onChange={(e)=>{setState({...state, password:e.target.value})}}
                    />
                  </div>
                  <div className="col text-center mt-3">
                    <button className="btn btn-light  btn-outline-dark" onClick={handleSubmit}> Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

