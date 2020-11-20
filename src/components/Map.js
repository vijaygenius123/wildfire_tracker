import GoogleMapReact from 'google-map-react'
import React from "react";

const Map =  ({center, zoom}) => {
    return (
    <div className="map">
        <GoogleMapReact
            bootstrapUrlKeys={{key: 'AIzaSyCB3dWraQeMuqLsv23API5P1z0K4M757R4'}}
            defaultCenter={center}
            defaultZoom={zoom}
        />
    </div>
    )
}


Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756,
    },
    zoom: 10
}

export default Map;
