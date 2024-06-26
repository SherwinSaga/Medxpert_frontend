import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
        <MDBFooter bgColor='light' className='text-center text-lg-left' style={{ position: 'fixed', bottom: 0, width: '100%' }}>
            <div className='text-center p-3 text-white' style={{ backgroundColor: '#051650' }}>
            © {new Date().getFullYear()} Copyright:{' '}
            <a className='text-white' href='https://mdbootstrap.com/'>
                MedXpert.com
            </a>
            </div>
        </MDBFooter>
    </div>
  )
}

export default Footer;
