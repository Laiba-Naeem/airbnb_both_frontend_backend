import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { base_url } from "../base_url";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get(`${base_url}/hotel/allhotels`)
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleBooking = (hotelId) => {
    console.log(`Book now for hotel id: ${hotelId}`);
    const access_token = localStorage.getItem("accessToken");
    const booking_time = new Date().toISOString().substring(0, 10);
    const data = {
      hotel_id: hotelId,
      booking_time: booking_time,
    };
    localStorage.setItem("booking_time", booking_time);
    console.log("data", data);
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      // alert("Please Login to View this Page");
      navigate("/signin");
    } else
      axios
        .post(`${base_url}booking/booking/`, data, {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => console.log(response.data))
        // .then(alert("Booking Successful"))
        .then(navigate("/bookinghist"))

        .catch((error) => console.log(error));
  };

  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <div className="hotel-card" key={hotel.hotel_id}>
          <div className="hotel-image" id={hotel.hotel_id}>
            <button onClick={() => handleBooking(hotel.hotel_id)}>
              Book Now
            </button>
          </div>
          <div className="hotel-details">
            <div className="hotel-title">{hotel.hotel_name}</div>
            <div className="hotel-address">{hotel.hotel_location}</div>
            <div className="hotel-price">
              {Number(hotel.bed_rooms)} Bed Rooms{" "}
            </div>
            <br />
            <div className="hotel-lat">Latitude: {hotel.latitude}</div>
            <div className="hotel-long">Longitude: {hotel.latitude}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
