import React from "react";
import "../Order/Order.css";
import eye from "../../../assets/eye.svg";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";

const Order = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="order_container">
        <div style={{ marginRight: "130px" }}>{item.OrderId}</div>
        <div style={{ marginRight: "140px" }}>
          {new Date(item.createdAt).toLocaleDateString()}
        </div>
        <div style={{ marginRight: "130px" }}>{item.storeLocation}</div>
        <div style={{ marginRight: "130px" }}>990107463</div>
        <div style={{ marginRight: "170px" }}>{item.totalQuantity}</div>
        <div style={{ marginRight: "100px" }}>{item.totalPrice}</div>
        <div style={{ marginRight: "50px" }}>ready to Pickeup</div>
        <div className="eyeimg">
          <img onClick={onOpen} src={eye} alt="eye" />
        </div>
      </div>

      <Drawer onClose={onClose} isOpen={isOpen} size={"xl"}>
        <DrawerOverlay />
        <DrawerContent style={{ padding: "0px" }}>
          <DrawerCloseButton className="drawer_closebtn" />
          <DrawerHeader className="drawer_header">Summary</DrawerHeader>
          <DrawerBody style={{ padding: "0px" }} className="drawer_body">
            <div className="store_details">
              <div className="store_selector">{item.storeLocation}</div>
              <div className="store_address">
                <p>
                  <strong>Store Address</strong>
                </p>
                <p>{item.Address}</p>
              </div>
              <div>
                <p>
                  <strong>Phone Number:</strong>
                </p>
                <p>{item.PhoneNo}</p>
              </div>
            </div>
            <div className="summary_order_container">
              <div className="summary_heading">
                <h2>Order details</h2>
              </div>

              {Object.keys(item)
                .filter((key) => {
                  return [
                    "Shirts",
                    "Jeans",
                    "Trousers",
                    "Joggers",
                    "Boxers",
                    "Tshirts",
                  ].includes(key);
                })
                .map((key) => {
                  if (item[key].quantity > 0) {
                    return (
                      <div
                        style={{ display: "flex" }}
                        className="summary_orderdetails"
                      >
                        <h1>{item[key].name}</h1>
                        <p>{item[key].washtype}</p>

                        <div className="summary_price">
                          <h3 className="summary_price_calculator">
                            {item[key].quantity} x {item[key].totalPrice} ={" "}
                          </h3>
                          <h3 className="summary_totalPrice">
                            {item[key].totalPrice * item[key].quantity}
                          </h3>
                        </div>
                      </div>
                    );
                  }
                })}

              <div className="summary_subtotal">
                <div className="summary_pricediv">
                  <p
                    style={{
                      fontSize: "17px",
                      marginRight: "30px",
                      fontWeight: 400,
                    }}
                    className="summary_priceparticulars"
                  >
                    Subtotal:
                  </p>
                  <h3
                    style={{ fontSize: "18px", fontWeight: 400 }}
                    className="summary_mainPrice"
                  >
                    {item.totalPrice - 90}
                  </h3>
                </div>
                <hr className="horizontal_line"></hr>
                <div
                  style={{
                    paddingLeft: "620px",
                    height: "50px",
                    paddingTop: "15px",
                    fontSize: "18px",
                    fontWeight: 500,
                  }}
                >
                  <h2>Pickup Charges : 90</h2>
                </div>
              </div>
              {/* <div className="summary_pickupcharges">
                <div className="summary_pricediv pickup">
                  <p
                    style={{ marginRight: "30px", fontWeight: 500 }}
                    className="summary_riceparticulars"
                  >
                    pickup charges:
                  </p>
                  <h3
                    className="summary_mainPrice"
                    style={{ fontSize: "20px", fontWeight: 600 }}
                  >
                    {" "}
                    90{" "}
                  </h3>
                </div>
                <hr className="horizontal_line"></hr>
              </div> */}
              <div className="summary_totalprice">
                <div className="summary_pricediv total">
                  <h2 className="summary_maintotal_heading">Total:</h2>
                  <h2 className="summary_maintotal_value">
                    <span>Rs</span> {item.totalPrice}
                  </h2>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="address_container">
              <h1>Address</h1>
              <div className="address_home">
                <h1>Home</h1>
                <p>#223, 10th road, Jp Nagar, Bangalore</p>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Order;
