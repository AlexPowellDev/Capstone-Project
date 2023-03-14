import Nav from '../components/nav'
import Footer from '../components/footer'

function Menu(){
    return(
        <>
            {<Nav/>}
            <div>
                <h1>Menu</h1>
            </div>
            {<Footer/>}
        </>
    )
}

export default Menu