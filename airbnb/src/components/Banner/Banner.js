import React from 'react'
import './Banner.css'
import Button from "@mui/material/Button";

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-info'>
        <h1>Get out and stretch your imiganition</h1>
        <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
        <Button variant="outliend">Explore Nearvy</Button>
      </div>
      <img src="https://pbs.twimg.com/media/GPKDGP5W4AAqOPO.jpg:large" alt="airbnb Experience"className="banner-image"/>
    </div>
  )
}

export default Banner
