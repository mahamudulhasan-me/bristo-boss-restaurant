import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51NEWqJBqXwzigbXRP470KDyMHym9vZ2BX4IWTtW2rKgVi70RgduKN7VyUy5ThSS77Om0vAd212ETrKNoNcl5ndw900IHFiKIg3"
);
const Payment = () => {
  return (
    <div>
      <SectionHeader title={"Payment"} subTitle={"O Teka Teka"} />
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
