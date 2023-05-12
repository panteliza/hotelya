

import emailjs from 'emailjs-com'
const Contactus=()=>{
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_bnlxll3','template_a6vb84r',e.target,"paB9Fa3skrWCWeubU").then(res=>{
      console.log(res)
    }).catch(err=>console.log(err));
  }
  return(
    <div className="container border" 
    style={{marginTop:"50px",
    width:'50%',
    backgroundImage:`url(https://images.pexels.com/photos/4947737/pexels-photo-4947737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    
    
    }}
    >
      <h2 style={{marginTop:"25px" ,}}>
        Contact Us
      </h2>
      <form className="row" style={{margin:"25px 85px 75px 100px"}} 
      onSubmit={sendEmail}>
      
        <label>Name</label>
        <input type='text' name='name' className="form-control"/>
        <label>Email</label>
        <input type='email' name='user_email' className="form-control"/>
        <label>Message</label>
        <textarea name='message' rows='4' className="form-control"/>
        <input type='submit' value='Send' className="form-control btn btn-primary"
         style={{marginTop:'30px'}}

        />
        
      </form>
    </div>
  )
}
export default Contactus;