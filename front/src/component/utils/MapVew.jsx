import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ coordinates }) => {

    console.log(coordinates);
    
    
    const [position, setPosition] = useState([coordinates.lat, coordinates.lon]);

    useEffect(() => {
        setPosition([coordinates.lat, coordinates.lon]);
    }, [coordinates]);

    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
            <ChangeView center={position} zoom={15} />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=Y8qRMiFoKQwnr1P6dF3V"
            />

            <Marker position={position}>
                <Popup>
                    Ubicación.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
};

export default MapView;