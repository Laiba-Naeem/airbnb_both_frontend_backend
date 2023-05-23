import React, { useState, useEffect } from "react";
import "./userdetail.css";
import { base_url } from "../base_url";
function Userdetail() {
  const [userData, setUserData] = useState(null);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${base_url}/auth/specificuser/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await response.json();

        setUserData(data);
        console.log("data", data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [accessToken]);

  if (!userData) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!accessToken) {
    return (
      <div>
        <h1>Please Login First to view this Page</h1>
      </div>
    );
  } else {
    return (
      <div className="table-container">
        <h1>User Data</h1>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date Joined</th>
              <th>Is Superuser</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.date_joined}</td>
                <td>{user.is_superuser ? "Yes" : "No"}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Userdetail;
