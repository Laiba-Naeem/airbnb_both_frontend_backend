// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const BookingHistory = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       axios
//         .get("http://127.0.0.1:8000/booking/bookinghist/", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => {
//           setBookings(response.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Booking History</h1>
//       {bookings.map((booking, index) => (
//         <div key={index}>
//           <h2>{booking.hotel.hotel_name}</h2>
//           <p>Booking time: {booking.booking_time}</p>
//           <p>Location: {booking.hotel.hotel_location}</p>
//           <p>Bedrooms: {booking.hotel.bed_rooms}</p>
//           <p>Latitude : {booking.hotel.latitude}</p>
//           <p>Longitude : {booking.hotel.longitude}</p>
//           {/* Add more details as needed */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookingHistory;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./bookinghistory.css"; // Import your CSS file
// import { useNavigate } from "react-router-dom";

// const BookingHistory = () => {
//   const [bookings, setBookings] = useState([]);
//   const [houseImages, setHouseImages] = useState([]);
//   const bookingTime1 = localStorage.getItem("booking_time");
//   const date = new Date(bookingTime1 + "T00:00:00.90Z");
//   const bookingTime = date.toISOString().replace("T", " ").replace("Z", "");
//   const navigate = useNavigate();

//   const access_token = localStorage.getItem("accessToken");

//   const handleCancelBooking = () => {
//     if (bookingTime) {
//       axios
//         .post(
//           "http://127.0.0.1:8000/booking/cancel/",
//           {
//             booking_time: bookingTime,
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${access_token}`,
//             },
//           }
//         )
//         .then((response) => {
//           // handle success
//           console.log(response.data);
//           alert("Bookings have been Cancelled");
//           window.location.reload(false);
//         })
//         .catch((error) => {
//           // handle error
//           console.log(error);
//         });
//     }
//   };

//   const handleSignout = () => {
//     navigate("/");
//     window.location.reload(false);
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       axios
//         .get("http://127.0.0.1:8000/booking/bookinghist/", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => {
//           setBookings(response.data);
//           const images = Array.from(
//             { length: response.data.length },
//             (_, i) => `https://source.unsplash.com/200x200/?house/${i}`
//           );
//           setHouseImages(images);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   }, []);

//   if (!access_token) {
//     return (
//       <div>
//         <h1>Please Login First to view this Page</h1>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <button
//           onClick={handleCancelBooking}
//           style={{
//             backgroundColor: "#ff5a5f",
//             color: "white",
//             border: "none",
//             padding: "10px 20px",
//             borderRadius: "5px",
//             float: "right",
//             marginTop: "30px",
//             marginRight: "85px",
//             cursor: "pointer",
//           }}
//         >
//           <b> Cancel Booking </b>
//         </button>
//         <button
//           onClick={handleSignout}
//           style={{
//             backgroundColor: "#ff5a5f",
//             color: "white",
//             border: "none",
//             padding: "10px 20px",
//             borderRadius: "5px",
//             float: "right",
//             marginTop: "30px",
//             marginRight: "85px",
//             cursor: "pointer",
//           }}
//         >
//           <b> Signout </b>
//         </button>
//         <h1>Booking History</h1>
//         <table class="center">
//           <thead>
//             <tr>
//               <th>Hotel Name</th>
//               <th>Booking Time</th>
//               <th>Location</th>
//               <th>Bedrooms</th>
//               <th>Latitude</th>
//               <th>Longitude</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking, index) => (
//               <tr key={index}>
//                 <td>
//                   <img src={houseImages[index]} alt="House" />
//                   <b>{booking.hotel.hotel_name}</b>
//                 </td>
//                 <td>{booking.booking_time}</td>
//                 <td>{booking.hotel.hotel_location}</td>
//                 <td>{booking.hotel.bed_rooms}</td>
//                 <td>{booking.hotel.latitude}</td>
//                 <td>{booking.hotel.longitude}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// };
// ////////////

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./bookinghistory.css"; // Import your CSS file
import { base_url } from "../base_url";
const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [houseImages, setHouseImages] = useState([]);
  const bookingTime1 = localStorage.getItem("booking_time");
  const date = new Date(bookingTime1 + "T00:00:00.90Z");
  const bookingTime = date.toISOString().replace("T", " ").replace("Z", "");

  const access_token = localStorage.getItem("accessToken");

  const handleCancelBooking = (id) => {
    if (bookingTime) {
      axios
        .post(
          `${base_url}/booking/cancel/`,
          {
            booking_time: bookingTime,
            booking_id: id,
          },
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        )
        .then((response) => {
          // handle success
          console.log(response.data);

          window.location.reload(false);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      axios
        .get(`${base_url}/booking/bookinghist/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setBookings(response.data);
          console.log(response.data);
          const images = Array.from(
            { length: response.data.length },
            (_, i) => `https://source.unsplash.com/200x200/?house/${i}`
          );
          setHouseImages(images);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  if (!access_token) {
    return (
      <div>
        <h1>Please Login First to view this Page</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Booking History</h1>
        <table class="center">
          <thead>
            <tr>
              <th>Hotel Name</th>
              <th>Booking Time</th>
              <th>Location</th>
              <th>Bedrooms</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>
                  <img src={houseImages[index]} alt="House" />
                  <b>{booking.hotel.hotel_name}</b>
                </td>
                <td>{booking.booking_time}</td>
                <td>{booking.hotel.hotel_location}</td>
                <td>{booking.hotel.bed_rooms}</td>
                <td>{booking.hotel.latitude}</td>
                <td>{booking.hotel.longitude}</td>
                <td>
                  <button
                    id={booking.booking_id}
                    onClick={() => handleCancelBooking(booking.booking_id)}
                    style={{
                      backgroundColor: "#ff5a5f",
                      color: "white",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      float: "right",
                      marginTop: "30px",
                      marginRight: "85px",
                      cursor: "pointer",
                    }}
                  >
                    <b> Cancel Booking </b>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default BookingHistory;
