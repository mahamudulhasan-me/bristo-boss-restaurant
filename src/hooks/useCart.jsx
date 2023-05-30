import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem("access-token");
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.uid],
    queryFn: async () => {
      const response = await axiosSecure(`/carts?uid=${user?.uid}`);
      return response.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
