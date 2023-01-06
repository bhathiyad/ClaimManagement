import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div class="mini-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="copyright-text">
            <p>© 2023 All rights reserved</p>
            {/* <p className='footer-items'>
                <p>abcd</p>
                <p>efgh</p>
            </p> */}
          </div>

          <div class="go_top">
            <span class="icon-arrow-up"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer