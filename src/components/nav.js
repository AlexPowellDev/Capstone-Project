import logo from '../../src/assets/LL-Logo.jpg';
import '../styles/index.css'
import { Link } from 'react-router-dom';
import { useRef, useState,useEffect } from 'react';



function Nav(){

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const handleClick = (event)=>{
        const isOpened = event.target.getAttribute('data-expanded')
        if(isOpened === 'false'){
            event.target.setAttribute('data-expanded', 'true')
        }else{
            event.target.setAttribute('data-expanded', 'false')
        }
    }

    useEffect(() => {
        console.log(document.querySelector('.hamburger-btn'))
    }, [])

    return(
    <nav 
    className={
        isNavExpanded ? "nav-container expanded" : "nav-bar"}
    >
        <div>
            <img src={logo} alt="Little Lemon logo" id='nav-logo'/>
        </div>
        <ul 
        className="nav-container"
        data-expanded='false'
        >
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Menu">Menu</Link></li>
            <li><Link to="/Reservations">Reservations</Link></li>
        </ul>
        <button 
        className='nav-toggle'
        aria-controls='primary-navigation'
        onClick={() => {setIsNavExpanded(!isNavExpanded)}}
        >
            <svg 
            onClick={(e)=>handleClick(e)} 
            data-expanded='false' 
            className='hamburger' 
            viewBox='0 0 100 100' 
            width={'250'}
            >
                <rect className='line top' width={'80'} height={'10'} x={'10'} y={'25'} rx={'5'}></rect>
                <rect className='line middle' width={'80'} height={'10'} x={'10'} y={'45'} rx={'5'}></rect>
                <rect className='line bottom' width={'80'} height={'10'} x={'10'} y={'65'} rx={'5'}></rect>
            </svg>
        </button>
    </nav>
        )
    }
    
    export default Nav;