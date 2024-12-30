import { useEffect, useState } from 'react';

interface GeolocationCoords {
  latitude: number;
  longitude: number;
}

interface GeolocationPosition {
  coords: GeolocationCoords;
}

export default function useGeolocation() {
  const [position, setPosition] = useState<GeolocationCoords>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const geo = navigator.geolocation;

    // Ensure that geo.watchPosition is available
    if (!geo) {
      console.error('Geolocation is not supported by this browser.');
      return;
    }

    function onSuccess(position: GeolocationPosition) {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function onError(error: GeolocationPositionError) {
      console.error(error.message);
    }

    const watcher = geo.watchPosition(onSuccess, onError);

    // Cleanup the watchPosition on unmount
    return () => geo.clearWatch(watcher);
  }, []);

  return position;
}
