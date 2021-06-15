import React, { useContext } from "react";
import { UserContext, UserOrderContext } from "../../../App";
import NavBar from "../../Home/NavBar/NavBar";
import ProcessPayment from "../../ProcessPayment/ProcessPayment";
import "./Book.css";
const Book = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  const [selcOrder, setSelcOrder] = useContext(UserOrderContext);
  console.log("selcOrder", selcOrder);
  /////
  const total = selcOrder.price - (selcOrder.price * selcOrder.discount) / 100;
  console.log("total", total);
  ////
  ////////////////
  const handelpaymentSuccess = (paymentId) => {
    const datas = {
      ...selcOrder,
      ...loginUser,

      paymentId,
      date: new Date().toDateString(),
    };
    console.log("datas", datas);
  };
  ///////////////
  return (
    <div style={{ background: "#111", height: "100vh" }}>
      <NavBar></NavBar>
      <ul className="headers-emails">
        <li
          style={{
            paddingTop: "5px",
            color: "goldenrod",
            paddingRight: "6px",
          }}
        >
          {loginUser.loginUserName}
        </li>
        <li>
          {" "}
          <img
            src={loginUser.loginUserPhoto}
            alt=""
            style={{
              width: "40px",
              borderRadius: "100%",
            }}
          />
        </li>
      </ul>

      <div style={{ textAlign: "center" }}>
        <img
          className="selc-img"
          src={selcOrder.img}
          alt=""
          style={{ width: "50%", height: "50%", margin: "auto" }}
        />

        <div
          style={{
            backgroundColor: "#2d2c2cb3",
            padding: "20px",
          }}
        >
          <h2 style={{ color: "#de8686" }}>{selcOrder.course}</h2>
          <small style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            est quo suscipit nemo quisquam blanditiis.
          </small>
          <h3>
            {" "}
            <big style={{ color: "goldenrod" }}>$ {selcOrder.price}</big>{" "}
            <span style={{ paddingLeft: "20px", color: "gray" }}>
              {selcOrder.discount}% <small>discount</small>{" "}
            </span>
          </h3>
          <p style={{ color: "#f64747a3" }}>
            Total cost :{" "}
            <span style={{ color: "goldenrod", fontWeight: "600" }}>
              ${total}
            </span>
          </p>
        </div>
      </div>
      <div className="container ">
        <ProcessPayment
          handelpaymentSuccess={handelpaymentSuccess}
        ></ProcessPayment>
      </div>
    </div>
  );
};

export default Book;
