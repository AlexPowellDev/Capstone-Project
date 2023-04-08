
import { useState } from "react";
import '../styles/bookingForm.css'
import seating from '../assets/pexels-lina-kivaka-12238177.jpg'


function BookingForm(props){

    const [values, setValues] = useState({
         guest: "", occasion: "", comment: ""
    });

    const clearForm = () =>{
        setValues({date:"",guest:"",occasion: "", comment: ""})
    };

    const getIsFormValid = () => {
        return(
        values.date,
        values.guest,
        values.occasion != null
        )
    };

    const saveFormValues = async () => {
        const response = JSON.stringify(values);
        console.log(response)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        clearForm();
        saveFormValues();
        props.submitForm(values);
        console.log("submitted")
    }

    return(
        <div className="form-wrapper">
            <form className="form-container" onSubmit={handleSubmit} aria-label="Reservation Form">
                <label 
                htmlFor="res-date" 
                className="form-label">
                    <sup>*</sup>Choose Date: 
                    <input
                    aria-label="Choose Date"
                    className="form-input"
                    type="date" required
                    id="res-date"
                    value={values.date}
                    onChange={props.handleChange}
                    />
                </label>
                <label htmlFor="res-time" className="form-label"><sup>*</sup>Choose Time:
                    <select
                    aria-label="Choose Time"
                    className="form-input" 
                    id="res-time"
                    required
                    >
                    {props.initializeTimes}
                    </select>
                </label>
                <label htmlFor="res-guests" className="form-label">
                <sup>*</sup>Number of Guests: 
                    <input 
                    aria-label="Number of Guests"
                    className="form-input"
                    type="number" required
                    name="guests"  
                    placeholder="0" 
                    min="0" 
                    max={"10"} 
                    id="res-guests"
                    value={values.guest}
                    onChange={(e)=>{setValues(e.target.value)}}
                    />
                 </label>   

                <label htmlFor="Occasion" className="form-label">Occasion:
                    <select 
                    className="form-input"
                    id="Occasion"
                    value={values.occasion}
                    placeholder="Select an occasion"
                    onChange={(e)=>{setValues(e.target.value)}}
                    >
                        <option>None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Buisness Meeting</option>
                    </select>
                </label>
                <div className="comment-wrapper">
                    <textarea
                        className="form-input"
                        id="comments"
                        value={values.comment}
                        placeholder="Add a special request (optional)"
                        maxLength={100}
                        onChange={(e)=>{setValues(e.target.value)}}
                    >  
                    </textarea>
                </div>
                    <button 
                        type="Submit" 
                        className="form-button"
                        disabled={getIsFormValid()}
                    >
                        Reserve a Table
                    </button>
            </form>
        <div className='res-img-wrapper'>
            <img id="res-img" src={seating} alt=''/> 
        </div>
    </div>
    )
};

export default BookingForm;