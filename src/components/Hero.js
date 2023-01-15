import React,{useState} from 'react'
import './Hero.css'
import Crypto from '../media/hero-img.jpeg'
import axios from 'axios'

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    

    function handleSearch(e) {
        e.preventDefault();
        axios.get(`https://api.coingecko.com/api/v3/coins/${searchQuery}?api_key=YOUR_API_KEY`)
          .then(response => {
            console.log(response.data);
            // Handle the response data here, such as displaying the search results on the page
          })
          .catch(error => {
            console.log(error);
            // Handle the error here, such as displaying an error message to the user
          });
      }
     

function handleSearch(e) {
  e.preventDefault();
  setIsLoading(true);
  axios.get(`https://api.coingecko.com/api/v3/coins/${searchQuery}?api_key=YOUR_API_KEY`)
    .then(response => {
      setIsLoading(false);
      console.log(response.data);
      // Handle the response data here, such as displaying the search results on the page
    })
    .catch(error => {
      setIsLoading(false);
      console.log(error);
      // Handle the error here, such as displaying an error message to the user
    });
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
                        <button className='btn' onClick={() => handleSearch(searchQuery, setSearchQuery)}>Search</button>
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