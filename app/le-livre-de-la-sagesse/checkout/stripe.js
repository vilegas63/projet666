import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
//live key: "pk_live_51P6pbAKMw3NZudRhPJNWuAVWZOpYcgy5G59eMVRKBwh9dvVgoJxMlSwRlUm071LZoEW7Oq9xJzm3LViVR874ZSJq00hehlhK1j"
//test key "pk_test_51P6pbAKMw3NZudRh4S8rmqMP4krBIh7Yla2zNJxsOP421KmTFkOlvxNn68IqX4tVKoUEKHADnLU6JtEynetZHCx200UfCP8Jmi"
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_live_51P6pbAKMw3NZudRhPJNWuAVWZOpYcgy5G59eMVRKBwh9dvVgoJxMlSwRlUm071LZoEW7Oq9xJzm3LViVR874ZSJq00hehlhK1j");
  }
  return stripePromise;
};

export default getStripe;
