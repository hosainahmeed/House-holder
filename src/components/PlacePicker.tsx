// "use client";

// import { useState } from 'react';
// import { APIProvider, Map, useMapsLibrary } from '@vis.gl/react-google-maps';

// const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || '';

// export default function PlacePicker() {
//   const [placeInfo, setPlaceInfo] = useState<{ name: string, address: string } | null>(null);

//   const handleMapClick = (ev: any) => {
//     const lat = ev.detail.latLng.lat;
//     const lng = ev.detail.latLng.lng;

//     console.log('Map clicked at:', {
//       latitude: lat,
//       longitude: lng,
//       latLng: ev.detail.latLng
//     });

//     // Use the Google Maps Geocoder from the window object
//     if (window.google && window.google.maps) {
//       const geocoder = new window.google.maps.Geocoder();
//       geocoder.geocode(
//         { location: { lat, lng } },
//         (results: google.maps.GeocoderResult[] | null, status: google.maps.GeocoderStatus) => {
//           if (status === 'OK' && results && results[0]) {
//             console.log('Clicked location address:', results[0].formatted_address);
//             setPlaceInfo({
//               name: results[0].formatted_address,
//               address: results[0].formatted_address
//             });
//           } else {
//             console.log('No address found for clicked location');
//             setPlaceInfo({
//               name: `Location (${lat.toFixed(6)}, ${lng.toFixed(6)})`,
//               address: `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`
//             });
//           }
//         }
//       );
//     } else {
//       // Fallback if Google Maps is not loaded
//       console.log('Google Maps not loaded, using coordinates only');
//       setPlaceInfo({
//         name: `Location (${lat.toFixed(6)}, ${lng.toFixed(6)})`,
//         address: `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`
//       });
//     }
//   };

//   console.log(placeInfo)
//   return (
//     <div style={{ height: '500px', minHeight: '500px', width: '100%' }}>
//       <APIProvider apiKey={API_KEY as string}>
//         <Map
//           defaultCenter={{ lat: 40.7128, lng: -74.0060 }}
//           defaultZoom={13}
//           mapId="YOUR_MAP_ID"
//           onClick={handleMapClick}
//         />
//       </APIProvider>
//     </div>
//   );
// }

"use client";

import { useState, useCallback } from 'react';
import { APIProvider, Map, useMapsLibrary, MapMouseEvent } from '@vis.gl/react-google-maps';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || '';

export default function PlacePicker() {
  const [placeInfo, setPlaceInfo] = useState<{ name: string, address: string } | null>(null);
  const [selectedCoords, setSelectedCoords] = useState<{lat: number, lng: number} | null>(null);
  
  // This hook ensures the Geocoding library is loaded before use
  const geocodingLib = useMapsLibrary('geocoding');

  const handleMapClick = useCallback((ev: MapMouseEvent) => {
    if (!ev.detail.latLng) return;
    
    const { lat, lng } = ev.detail.latLng;
    setSelectedCoords({ lat, lng });

    // OPTIMIZATION: Only geocode if the library is ready
    if (geocodingLib) {
      const geocoder = new google.maps.Geocoder();
      
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === 'OK' && results?.[0]) {
          setPlaceInfo({
            name: results[0].formatted_address,
            address: results[0].formatted_address
          });
        }
      });
    }
  }, [geocodingLib]);

  return (
    <div className="flex flex-col gap-4">
      <div style={{ height: '400px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
        <APIProvider apiKey={API_KEY}>
          <Map
            defaultCenter={{ lat: 40.7128, lng: -74.0060 }}
            defaultZoom={13}
            mapId="DEMO_MAP_ID"
            onClick={handleMapClick}
            // Optimization: Limit map gestures to prevent accidental clicks
            gestureHandling={'greedy'} 
          />
        </APIProvider>
      </div>

      {placeInfo && (
        <div className="p-4 border rounded shadow-sm bg-gray-50">
          <p className="font-semibold text-sm">Selected Address:</p>
          <p className="text-gray-600">{placeInfo.address}</p>
        </div>
      )}
    </div>
  );
}