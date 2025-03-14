import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [16.0544, 108.2022]; // Tọa độ Đà Nẵng

  return (
    <div style={{ width: "100vw", height: "calc(100vh - 60px)" }}>
      <MapContainer center={position} zoom={13} style={{ width: "100%", height: "100%" }}>
        {/* Lớp nền bản đồ từ OpenStreetMap */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Marker đánh dấu vị trí */}
        <Marker position={position}>
          <Popup>Đây là Đà Nẵng!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
