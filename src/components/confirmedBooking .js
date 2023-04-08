import Nav from "./nav"
import Footer from "./footer"
import ConfirmedBookingForm from "./confirmedBookingForm"

function ConfirmedBooking(){
    return(
        <div>
            <Nav/>
            <header>
                <div className="CTA">
                    <h1>Book a table</h1>
                    <h2>Little Lemon</h2>
                </div>
            </header>
            <ConfirmedBookingForm/>
            <Footer/>
        </div>
    )
}

export default ConfirmedBooking