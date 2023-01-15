import React,{useState} from 'react'
import './Hero.css'
import Crypto from '../media/hero-img.jpeg'

const Hero = () => {

    function SearchBar() {
        const [searchQuery, setSearchQuery] = useState('');
        
    }
      
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>Stay ahead of the crypto market with real-time pricing updates.</p>
                    <h1>Unleash crypto opportunities!</h1>
                    <p>Find crypto prices with ease.</p>
                    <div className='input-container'>
                    <input type="text" placeholder="Search crypto by name or symbol" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
                        <button className='btn' onClick={handleSearch}>Search</button>
                    </div>
                    
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt='crypto currency'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero