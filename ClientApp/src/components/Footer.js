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

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Footer() {
    return (
        <div className='footerDiv'>
           <h1> Footer </h1> 
            <div className='mapComponent'>
                <WrappedMap
                    googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyApaKxXgGACpvAubM5MGmHnOsQlgVu4ztw'}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>
        </div>
    )
}