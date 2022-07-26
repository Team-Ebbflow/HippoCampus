import React, { useState } from 'react';
import './Footer.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

function Map() {
    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 1.3373994482683065, lng: 103.84898905572572 }}
        >
            <Marker position={{ lat: 1.3373994482683065, lng: 103.84898905572572 }}/>
        </GoogleMap>
    )
}

function Login() {
    window.location.href = "/login";
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footerDiv'>
                <div className='grid-item-a'>
                    <h2>Contact</h2>
                    <p className='footerText'>Newcastle Australia IHE100<br />
                        Victoria Street#13-01/02<br />
                        National Library Building<br />
                        Singapore 188064 <br />
                        <a href='tel:+65-6221-3306'>+65 6221 3306</a></p>
                    <img src="https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/6249b1983ce781d1831f7d2c_uon-logo-square.png" width="75" alt="" className="image-3"></img>
                </div>
                <div className='grid-item-b'>
                    <h2>Enquiry</h2>
                    <p className='enquiryTitle'>NAME:</p>
                    <input className='enquiryField' placeholder='Enter your name'></input>
                    <p className='enquiryTitle'>EMAIL ADDRESS:</p>
                    <input className='enquiryField' placeholder='Enter your email'></input>
                    <p className='enquiryTitle'>MESSAGE:</p>
                    <textarea className='enquiryField' placeholder='Type your message here' rows={"2"}></textarea>
                    <button id='submitButton'>Submit</button>
                </div>
                <div className='grid-item-c'>
                    <h2>Campus Location</h2>
                    <div style={{ height: '100%', paddingBottom: '30%' }}>
                        <WrappedMap
                            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyApaKxXgGACpvAubM5MGmHnOsQlgVu4ztw'}
                            loadingElement={<div style={{ height: "100%" }} />}
                            containerElement={<div style={{ height: "100%" }} />}
                            mapElement={<div style={{ height: "100%" }} />}
                        />
                    </div>
                </div>
            </div>
            <div className='navBottom'>
                <div className='navBottomLine'>
                    <a className='navBottomLinks' href="https://policies.newcastle.edu.au/document/view-current.php?id=187">Copyright and Disclaimer</a>
                    <a className='navBottomLinks' href="https://policies.newcastle.edu.au/document/view-current.php?id=94">Privacy</a>
                    <a className='navBottomLinks' onClick={Login}>Admin Login</a>
                </div>
            </div>
        </div>
    )
}