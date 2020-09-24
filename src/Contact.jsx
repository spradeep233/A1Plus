import React,{useState} from 'react';




const Contact = () =>{
    const [data, setData] = useState({
        email:"",
        mobile:"",
        message:""
    });

    const InputEvent= (event) =>{
        const {name, value} = event.target;
        setData((prev)=>{
            return{
         ...prev,
         [name]: value
            }
        });
    }

    const ContactformSubmission =(event)=>{
        event.preventDefault();
        
        alert(
            `your email is ${data.email} and Mobile number is ${data.mobile}. you want to say ${data.message}.` 
        )
        setData({
            email:'',
            mobile:'',
            message:''
        });
    }
    return(
        <>
        <div className="my-5">
            <h1 className="text-center"> Contact US</h1>
        </div>

        <div className="container contact_div"> 
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form  onSubmit={ContactformSubmission}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email"
                         className="form-control"
                          id="exampleInputEmail1" 
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address"
                          name="email"
                          onChange={InputEvent}
                          value={data.email}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputMobile">Mobile</label>
                        <input type="text"
                         className="form-control"
                          id="exampleInputMobile"
                          placeholder="Enter Mobile"
                          name="mobile"
                          onChange={InputEvent}
                          value={data.mobile}
                          maxLength="10"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInpuMessage">Message</label>
                        <textarea type="password" 
                        className="form-control" 
                        id="exampleInpuMessage"
                        placeholder="Enter Message"
                          name="message"
                          onChange={InputEvent}
                          value={data.message}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        </div>
        </>
    )
};

export default Contact;