import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const SimpleCardFrom = ({ handelpaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentErr, setPaymentErr] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
      setPaymentErr(error.message);
      setPaymentSuccess(null);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setPaymentSuccess(paymentMethod.id);
      setPaymentErr(null);
      handelpaymentSuccess(paymentMethod.id);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <div>
          <button
            type="submit"
            disabled={!stripe}
            style={{
              marginTop: "40px",
              padding: "5px 18px",
              borderRadius: "5px",
              background: "#f64747a3",
              color: "white",
              border: "none",
            }}
          >
            submited
          </button>
        </div>
        {paymentErr && <p style={{ color: "red" }}>{paymentErr}</p>}
        {paymentSuccess && (
          <p style={{ color: "green", paddingTop: "10px" }}>
            Your Payment Was Successfully
          </p>
        )}
      </form>
    </div>
  );
};
export default SimpleCardFrom;
