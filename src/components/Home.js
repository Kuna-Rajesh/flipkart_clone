import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/swiggy logo.png';
import Home_food from '../assets/images/Home_left.webp';
import sec2i1 from '../assets/images/sec2i1.webp';
import sec2i2 from '../assets/images/sec2i2.webp';
import sec2i3 from '../assets/images/sec2i3.webp';
import sec3i1 from '../assets/images/sec3i1.webp';
import sec3i2 from '../assets/images/sec3i2.webp';
import sec3i3 from '../assets/images/sec3i3.webp';
import sec3i4 from '../assets/images/sec3i4.webp';
import footerlogo from '../assets/images/footerlogo.webp';
import footerfb from '../assets/images/footerfb.webp';
import footerinsta from '../assets/images/footerinsta.webp';
import footerpintrest from '../assets/images/footerpintrest.webp';
import footertwitter from '../assets/images/footertwitter.webp';

const Home = () => {
  const que = ['Hungry?','Unexpected guests?','Movie Marathon?','Late night at office?','Game night?','Cooking gone wrong?'];
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setNumber(Math.floor(Math.random() * que.length)),
      2000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
    <div className='Home1'>
      <div className='Home_left'>
        <div className='Home_Header'>
          <div className='navbar'>
            <img className='Home_logo' src={logo} alt="No png found"/>
            <div className='Head_account'>
            <Link to="/Login" className='Head_login'>Login</Link>
            <Link to="/Register" className='Head_sign'>Register</Link>
            </div>
          </div>
          <h1 className='ques'>
            {que[number]}
          </h1>
          <h2 className='head2food'>
          Order food from favourite restaurants near you.
          </h2>
          <div className='searchbox'>
            <form>
              <input type="text" placeholder='Enter your delivery location' className='searchbtn'>
              </input>
            </form>
            <button className='Homebtn'>Locate me</button>
            <button className='Homebtn2'>FIND FOOD</button>
          </div>
          <p className='head2food'>POPULAR CITIES IN INDIA</p>
          <div className='listbox'>
            <a className='city' href="#">Ahmedabad</a>
            <a className='city' href='#'>Bangalore</a>
            <a className='city' href='#'>Chennai</a>
            <a className='city' href='#'>Delhi</a>
            <a className='city' href='#'>Gurgaon</a>
            <a className='city' href='#'>Hyderabad</a>
            <a className='city' href='#'>& more.</a>
          </div>
        </div>
      </div>
      <div className='Home_right'>
         <img src={Home_food} alt="No png found" className='Home_food'/>
      </div>
    </div>
    <div className="Home2">
      <div className='Home2sub'>
        <div className='img1'>
          <img src={sec2i1} className='img2' alt='No png found'></img>
          <h2 className='home2h2'>
          No Minimum Order
          </h2>
          <p className='home2p'>
          Order in for yourself or for the group, with no restrictions on order value
          </p>
        </div>
        <div className='img1'>
          <img src={sec2i2} className='img2' alt='No png found'></img>
          <h2 className='home2h2'>
          Live Order Tracking
          </h2>
          <p className='home2p'>
          Know where your order is at all times, from the restaurant to your doorstep
          </p>
        </div>
        <div className='img1'>
          <img src={sec2i3} className='img2' alt='No png found'></img>
          <h2 className='home2h2'>
          Lightning-Fast Delivery
          </h2>
          <p className='home2p'>
          Experience Swiggy's superfast delivery for food delivered fresh & on time
          </p>
        </div>
      </div>
    </div>
    <div className="home3">
      <div className="home3l">
        <div className='home3lf'>
        <div className="home3l1">
        Restaurants in your pocket
        </div>
        <div className="home3l2">
        Order from your favorite restaurants & track on the go, with the all-new Swiggy app.
        </div>
        <div className="home3l3">
          <a className='home3l3a'>
            <img className='home3l3m m2' src={sec3i1} alt="No png found" />
          </a>
          <a>
            <img className='home3l3m' src={sec3i2} alt="No png found" />
          </a>
        </div>
        </div>
      </div>
      <div className="home3r">
        <img src={sec3i3} alt='No png found' className='home3rimg1'></img>
        <img src={sec3i4} alt='No png found' className='home3rimg2'></img>
      </div>
    </div>
    <div className='home4'>
      <div className="h4detials">
        <div className="h4detialsc">
          <div className="h4detialsh">
            COMPANY
          </div>
          <div className="h4detialsl">
            <ul className='h4ul' type="none">
              <li className='h4l'>About us</li>
              <li className='h4l'>Team</li>
              <li className='h4l'>Careers</li>
              <li className='h4l'>Swiggy Blog</li>
              <li className='h4l'>Bug Bounty</li>
              <li className='h4l'>Swiggy One</li>
              <li className='h4l'>Swiggy Corporate</li>
              <li className='h4l'>Swiggy Instamart</li>
            </ul>
          </div>
        </div>
        <div className="h4detialsc">
          <div className="h4detialsh">
          CONTACT
          </div>
          <div className="h4detialsl">
              <ul type="none">
                <li className='h4l'>Help & Support</li>
                <li className='h4l'>Partner with us</li>
                <li className='h4l'>Ride with us</li>
              </ul>
          </div>
        </div>
        <div className="h4detialsc">
          <div className="h4detialsh">
               LEGAL
          </div>
          <div className="h4detialsl">
              <ul type="none">
                <li className='h4l'>Terms & Cancellations</li>
                <li className='h4l'>Refund & Cancellation
                </li>
                <li className='h4l'>Privacy Policy
                </li>
                <li className='h4l'>Cookie Policy</li>
                <li className='h4l'>Offer Terms</li>
                <li className='h4l'>Phishing & Fraud</li>
                <li className='h4l'>Corporate – Swiggy Money Codes Terms and Conditions</li>
                <li className='h4l'>Corporate - Swiggy Discount Voucher Terms and Conditions</li>
              </ul>
          </div>
        </div>
        <div className="h4detialsc">
          <img src={sec3i1} alt="No png found" className='h4i'/>
          <img src={sec3i2} alt="No png found" className='h4i h4i2'/>
        </div>
      </div>
      <hr className='h4br'/>
      <div className="h4cities">
        <div className="h4detialsh">
              WE DELIVER TO
        </div>
        <div className="h4citiesp">
            All over the Planet
        </div>
      </div>
      <hr className='h4br'/>
      <div className="footer">
        <img src={footerlogo} alt="No png found" className='footerlogo'/>
        <p className='footerp'>© 2022 Swiggy</p>
        <div className="footercommunication">
          <img src={footerfb} alt="No png found" className='footerimg' />
          <img src={footerpintrest} alt="No png found" className='footerimg' />
          <img src={footerinsta} alt="No png found" className='footerimg'/>
          <img src={footertwitter} alt="No png found" className='footerimg'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home