// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View } from "react-native";

// import CorsDetls from "./CorsDetls/CorsDetls";
// import grapichDesignerImg from "../../images/grapich-designer.jpeg";
// import webDevloperimg from "../../images/web-developer.jpeg";
// import photoshopImg from "../../images/photo-shop.jpg";
// import degitalMarketingImg from "../../images/degital-marketing.jpg";
// import "./Course.css";
// //////////////
// const grapichDesigner = [
//   {
//     course: "grapich designer",
//     img: grapichDesignerImg,
//     price: 150,
//     discount: 10,
//   },
// ];
// const webDevloper = [
//   {
//     course: "Web devloper",
//     img: webDevloperimg,
//     price: 250,
//     discount: 15,
//   },
// ];
// const photoShop = [
//   {
//     course: "Photo Shop",
//     img: photoshopImg,
//     price: 185,
//     discount: 10,
//   },
// ];
// const degitalMarketing = [
//   {
//     course: "Degital Marketing",
//     img: degitalMarketingImg,
//     price: 120,
//     discount: 12,
//   },
// ];
// /////////////
// export default function Course() {

//   return (
//     <div>
//       <div className="grapich-designer">
//         {grapichDesigner.map((course) => (
//           <CorsDetls course={course}></CorsDetls>
//         ))}
//       </div>
//       <div className="web-devloper">
//         {webDevloper.map((course) => (
//           <CorsDetls course={course}></CorsDetls>
//         ))}
//       </div>
//       <div className="photoShop">
//         {photoShop.map((course) => (
//           <CorsDetls course={course}></CorsDetls>
//         ))}
//       </div>
//       <div className="degitial-marketing">
//         {degitalMarketing.map((course) => (
//           <CorsDetls course={course}></CorsDetls>
//         ))}
//       </div>

//     </div>
//   );
// }

// const styles = StyleSheet.create({});

import React, { useContext } from "react";
import grapichDesignerImg from "../../images/grapich-designer.jpeg";
import webDevloperimg from "../../images/web-developer.jpeg";
import photoshopImg from "../../images/photo-shop-7.jpg";
import degitalMarketingImg from "../../images/degital-marketing.jpg";
import CorsDetls from "./CorsDetls/CorsDetls";
import "./Course.css";
import { UserContext } from "../../App";
const grapichDesigner = [
  {
    course: "grapich designer",
    img: grapichDesignerImg,
    price: 150,
    discount: 10,
  },
];
const webDevloper = [
  {
    course: "Web devloper",
    img: webDevloperimg,
    price: 250,
    discount: 15,
  },
];
const photoShop = [
  {
    course: "Photo Shop",
    img: photoshopImg,
    price: 185,
    discount: 10,
  },
];
const degitalMarketing = [
  {
    course: "Degital Marketing",
    img: degitalMarketingImg,
    price: 120,
    discount: 12,
  },
];
const Course = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  return (
    <div>
      <div className="grapich-designer">
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

        {grapichDesigner.map((course) => (
          <CorsDetls course={course}></CorsDetls>
        ))}
      </div>
      <div className="web-devloper">
        {webDevloper.map((course) => (
          <CorsDetls course={course}></CorsDetls>
        ))}
      </div>
      <div className="photoShop">
        {photoShop.map((course) => (
          <CorsDetls course={course}></CorsDetls>
        ))}
      </div>
      <div className="degitial-marketing">
        {degitalMarketing.map((course) => (
          <CorsDetls course={course}></CorsDetls>
        ))}
      </div>
    </div>
  );
};

export default Course;
