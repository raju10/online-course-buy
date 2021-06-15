import React from "react";
import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardFrom from "./SimpleCardFrom/SimpleCardFrom";

const stripePromise = loadStripe(
  "pk_test_51IhYzaLilf526yUPJkCrZY3kNqczjl3MlKUCFUzSxPtIQ5betYc0fPB1PbXOaOQFYH9ZrhMQrY3Et4vTvty1UjY600Zm3rX7vs"
);
const ProcessPayment = ({ handelpaymentSuccess }) => {
  return (
    <div style={{ background: "#ffffffb3", padding: "20px" }}>
      <Elements stripe={stripePromise}>
        <SimpleCardFrom
          handelpaymentSuccess={handelpaymentSuccess}
        ></SimpleCardFrom>
      </Elements>
    </div>
  );
};

export default ProcessPayment;
