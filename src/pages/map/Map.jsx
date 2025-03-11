import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 16.054407,
  lng: 108.202164,
};

const Map = () => {
  return (
    <div className="w-screen h-[80vh]">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
        />
      </LoadScript>
    </div>
  );
};

export default Map;
