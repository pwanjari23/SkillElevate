import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    toast.error("Item removed from cart");
  };

  const handleEmptyCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
    toast.warn("Cart emptied");
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    toast.success("Redirecting to payment...");
    // For now, just simulate checkout
    setTimeout(() => {
      alert("🧾 Dummy payment successful!");
      handleEmptyCart();
    }, 2000);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto ">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
      <ToastContainer position="top-right" autoClose={1500} />

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total and actions */}
          <div className="mt-6 border-t pt-4 text-right space-y-3">
            <p className="text-xl font-semibold">
              Total: ₹{calculateTotal().toFixed(2)}
            </p>
            <div className="flex flex-wrap gap-3 justify-end">
              <button
                onClick={handleEmptyCart}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Empty Cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
