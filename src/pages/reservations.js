import '../styles/index.css'
import Nav from '../components/nav'
import Footer from '../components/footer'
import BookingForm from '../components/bookingForm'
import { useReducer,useEffect } from 'react'
import {fetchAPI, submitAPI} from '../components/api.js'
import { useNavigate } from "react-router-dom";

function Reservations(){
    const navigate= useNavigate();
    const initializeTimes = () => ({avail: fetchAPI(new Date())});

    const updateTimes = (state,action)=>(
        action.date !== undefined
        ? {avail: fetchAPI(new Date(action.date))}
        : state
    );
        

//state is being changed
    useEffect(()=>{
        console.log("changed",updateTimes)        
     },[updateTimes])


    const [state, dispatch] = useReducer(updateTimes, initializeTimes);

     //accepts the form data as a parameter and will submit it to the submitAPI (formData)
     const submitForm = (formData)=>{
        if(submitAPI(formData) === true){
            navigate("/Confirmed-Booking")
        }
     };

    return(
        <>
        <Nav/>
            <header>
                <div>
                    <h1>Book a table</h1>
                    <h2>Little Lemon</h2>
                </div>
            </header>
            <div>
                {<BookingForm
                initializeTimes={state.avail?.map(times => <option>{times}</option>)}
                handleChange = {(e)=> dispatch({date: e.target.value})}
                submitForm = {submitForm}
                />}
            </div>
        {<Footer/>}
        </>
    )
}

export default Reservations