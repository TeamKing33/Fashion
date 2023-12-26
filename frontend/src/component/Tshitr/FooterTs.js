import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import '../css/Tshirt.css';
import { NavLink } from 'react-router-dom';
export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white  footerts' >
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center footertx'>
            <span className='me-3'>Register for free</span>
            <NavLink to="/"><button className="btn btn-outline-light" type='button'  >
              Sign up!
            </button>
            </NavLink>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='#'>
          Team.com
        </a>
      </div>
    </MDBFooter>
  );
}