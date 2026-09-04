import React, { useState } from "react";

const Map = () => {
  const [locationError, setLocationError] = useState("");

  // Exact School Coordinates
  const SCHOOL_LAT = 28.479156;
  const SCHOOL_LNG = 76.028931;

  const getDirections = () => {
    setLocationError("");

    if (!navigator.geolocation) {
      setLocationError("Your browser does not support location services.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Current Location → School
        const googleMapsUrl =
          `https://www.google.com/maps/dir/?api=1` +
          `&origin=${latitude},${longitude}` +
          `&destination=${SCHOOL_LAT},${SCHOOL_LNG}` +
          `&travelmode=driving`;

        window.open(googleMapsUrl, "_blank");
      },
      () => {
        setLocationError("Please allow location permission to get directions.");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
          Our Location
        </h2>

        {/* Google Map */}
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={`https://www.google.com/maps?q=${SCHOOL_LAT},${SCHOOL_LNG}&z=16&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shree Ram Public School Location"
          />
        </div>

        {/* Address */}
        <p className="text-center mt-4 text-gray-600">
          Shree Ram Public School, Kanhra-Badhra Road, Charkhi Dadri, Haryana -
          127312
        </p>

        {/* Coordinates */}
        <p className="text-center mt-2 text-sm text-gray-500">
          📍 28.479156, 76.028931
        </p>

        {/* Directions Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={getDirections}
            className="px-6 py-3 rounded-lg bg-blue-900 text-white
                       font-semibold hover:bg-blue-800
                       transition duration-300 shadow-md"
          >
            📍 Get Directions from My Location
          </button>
        </div>

        {/* Location Error */}
        {locationError && (
          <p className="text-center mt-3 text-red-600 text-sm">
            {locationError}
          </p>
        )}
      </div>
    </section>
  );
};

export default Map;
