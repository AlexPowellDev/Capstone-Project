import Nav from '../components/nav'
import Footer from '../components/footer'

function Menu(){
    return(
        <>
        {<Nav/>}
            <header>
                <div className="CTA">
                    <h1>Menu</h1>
                    <h2>Little Lemon</h2>
                </div>
             </header>
             <div>
                <div className="elfsight-app-133bd3c7-8cbb-4f8a-b9a0-2d075d076390"></div>
             </div>
        {<Footer/>}
        </>
    )
}

export default Menu