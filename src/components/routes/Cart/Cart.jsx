import { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useCart } from "./CartContext";
import { Button, Snackbar, Tooltip } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
const Cart = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeItem } = useCart();
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason == "clickaway") {
      return;
    }
    setOpen(false);
  };
  const calculateSubtotal = () => {
    return cartItems.reduce((subtotal, item) => {
      return subtotal + item.product.price * item.quantity;
    }, 0);
  };

  return (
    <div className="container mx-auto my-10 h-screen">
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center h-[400px] align-middle">
          <div className="text-center">
            <h1 className="text-7xl">
              <RemoveShoppingCartIcon fontSize="inherit" />
            </h1>
            <h1 className="text-3xl">Your Cart is Empty</h1>
            <Link to="/" className="text-orange-700 underline">
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
          <div className="flex flex-col lg:flex-row w-full">
            <table className="lg:w-3/4 w-full lg:mx-2 mb-2 lg:mb-0">
              <thead>
                <tr className="border border-gray-300">
                  <th className="text-left p-2">Product</th>
                  <th className="text-left p-2">Quantity</th>
                  <th className="text-left p-2">Price</th>
                  <th className="text-left p-2">Subtotal</th>
                  <th className="text-left p-2"></th>
                </tr>
              </thead>
              <tbody className="border">
                {cartItems &&
                  cartItems.map((item) => (
                    <tr
                      key={item.product.id}
                      className=" border-b border-gray-300"
                    >
                      <td className="  p-2">
                      <div className="flex items-center space-x-4">
                        <Link to={`/productDetails/${item.product.id}`}>
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className=" w-12 h-12 object-cover rounded "
                          />
                        </Link>
                        
                          <p className="text-lg font-semibold">
                            {item.product.name}
                          </p>
                        </div>
                      </td>
                      <td className="py-2">
                        <div className="flex items-center space-x-4">
                          <button
                            className="text-gray-500"
                            onClick={() => decrementQuantity(item.product)}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="text-gray-500"
                            onClick={() => incrementQuantity(item.product)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-2">${item.product.price}</td>
                      <td className="py-2">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-2">
                        <Tooltip
                          title="Remove from Cart"
                          placement="left"
                          arrow
                          enterDelay={100}
                          leaveDelay={200}
                        >
                          <HighlightOffIcon
                            sx={{
                              fontSize: 20,
                              color: "gray",
                              "&:hover": { color: "black" },
                            }}
                            className="cursor-pointer"
                            onClick={() => {
                              removeItem(item.product);
                              setOpen(true);
                            }}
                          />
                        </Tooltip>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className=" lg:w-1/4 w-full">
              <div className="border p-4">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-gray-600">
                    $ {calculateSubtotal().toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-gray-300 my-4"></div>
                <div className="flex justify-between mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-lg font-semibold">
                    $ {calculateSubtotal().toFixed(2)}
                  </span>
                </div>
                <div className="my-4 ">
                  <label htmlFor="haveCoupen">Have a Coupen?</label>
                  <div className="flex  ">
                    <input
                      type="text"
                      className="border py-2 px-2 bg-transparent w-full"
                      placeholder="Add Coupen Code"
                    />
                    <Button variant="contained" color="secondary" type="submit">
                      ADD
                    </Button>
                  </div>
                </div>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  type="button"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            message="Removed from Cart"
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          />
        </>
      )}
    </div>
  );
};
export default Cart;
