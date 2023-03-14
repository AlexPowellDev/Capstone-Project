import Nav from '../components/nav'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

function Homepage(){
    return(
        <>
            {<Nav/>}
            {<Header/>}
            {<Main/>}
            {<Footer/>}
       </>
    )
}

export default Homepage