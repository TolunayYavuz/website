import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import '../style/footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='SocialMedia'>
        <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>

      </div>
        <p>Tüm Hakları Saklıdır</p>
    </div>
  )
}

export default Footer;