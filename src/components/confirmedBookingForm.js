import '../styles/bookingForm.css'
import seating from '../assets/pexels-lina-kivaka-12238177.jpg'
import { useState } from "react";
import * as yup from 'yup';

 function ConfirmedBookingForm(){
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
      };
      //validation
      const schema = yup.object().shape({
        firstName: yup.string().max(15, 'Must be 15 characters or less.').required(""),
        lastName: yup.string().max(15, 'Must be 15 characters or less.').required(""),
        email: yup.string().email('Invalid email address').required('Required'),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid.').required('Required')
      })

      const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = {
            firstName ,
            lastName ,
            email ,
            phone
        }
        const isValid = await schema.isValid(formData)
        console.log(isValid)
        alert("Reservation created!");
        clearForm();
      };    

    return(
        <div className='form-wrapper'>
            <form className="form-container" onSubmit={handleSubmit} aria-label="Reservation Form">
                <label
                htmlFor="first-name"
                className="form-label">
                First name <sup>*</sup>
                    <input
                    className="form-input"
                    type="text" required
                    id="first-name"
                    value={firstName}
                    placeholder="First name"
                    onChange={(e)=> setFirstName(e.target.value)}
                    />
                </label>
                <label
                htmlFor="last-name"
                className="form-label">
                Last Name <sup>*</sup>
                    <input
                    className="form-input"
                    type="text" required
                    id="last-name"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={(e)=> setLastName(e.target.value)}
                    />
                </label>
                <label
                htmlFor='res-email'
                className='form-label'>
                    Email <sup>*</sup>
                    <input
                    className='form-input'
                    type="email"
                    required
                    placeholder='you@company.com'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </label>
                <label
                htmlFor='res-number'
                className='form-label'>
                    Phone Number <sup>*</sup>
                    <input
                    className='form-input'
                    type="tel"
                    required
                    placeholder=''
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    />
                </label>
                <button 
                        type="Submit" 
                        className="form-button"
                        
                    >
                        Confirm Your Reservation
                    </button>
            </form>
            <div className='res-img-wrapper'>
                <img id="res-img" src={seating} alt=''/> 
            </div>
    </div>
    )
}

export default ConfirmedBookingForm