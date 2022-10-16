import React, { useEffect, useState } from "react";
import Header from "../outerLayer/Header";
import search from "../../../assets/search.svg";
import axios from "axios";
import Order from "../Order/Order";
import "../OrdersLandingPage/OrdersLandingPage.css";
import { UserState } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

const PastOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = UserState();
  const navigate = useNavigate();
  /////////get orders////////////////
  console.log("user", user);
  const getOrders = async () => {
    const { data } = await axios.get("/api/orders", {
      params: { id: user.userid },
    });
    console.log(data);
    setOrders(data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <div>
        <Header />
        <div className="landingpage_container" style={{ float: "right" }}>
          <div className="landingpage-header">
            <h2 className="heading">Create order</h2>
            <button
              onClick={() => {
                navigate("/createOder");
              }}
              className="create-btn"
            >
              Create
            </button>
            <div className="searchbar-container">
              <img src={search} alt="search" />
              <input className="searchbar" type="text" />
            </div>
          </div>
          {/* className="products_container" className="product_header" */}
          <div>
            <header className="product_headers">
              <div>Order Id</div>
              <div>Date & Time</div>
              <div>Store Location</div>
              <div>Phone No.</div>
              <div>Total Items</div>
              <div>Price</div>
              <div>Status</div>
              <div>View</div>
            </header>
            {orders.map((item) => {
              return <Order item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PastOrders;
