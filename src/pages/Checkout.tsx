import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { CheckCircle, CreditCard, Banknote, Truck, Store } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');

  if (cart.length === 0 && step === 1) {
    return (
      <div className="min-h-screen bg-stone-950 pt-24 pb-20 px-4 flex items-center justify-center">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-white font-serif">Your cart is empty</h2>
          <Link
            to="/menu"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  const handleOrder = () => {
    setStep(3);
    clearCart();
  };

  return (
    <div className="bg-stone-950 min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h1 className="text-3xl font-bold text-white font-serif mb-8">Checkout</h1>

            {/* Order Summary */}
            <div className="bg-stone-900 p-6 rounded-2xl border border-stone-800">
              <h2 className="text-xl font-bold text-amber-50 mb-4">Order Summary</h2>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b border-stone-800 pb-4 last:border-0">
                    <div className="flex items-center gap-4">
                      <div className="bg-stone-800 h-12 w-12 rounded-lg flex items-center justify-center text-stone-400 font-bold">
                        {item.quantity}x
                      </div>
                      <div>
                        <h3 className="font-medium text-stone-200">{item.name}</h3>
                        <p className="text-sm text-stone-500">৳{item.price} per item</p>
                      </div>
                    </div>
                    <span className="font-bold text-amber-500">৳{item.price * item.quantity}</span>
                  </div>
                ))}
                <div className="pt-4 space-y-2">
                  <div className="flex justify-between text-stone-400">
                    <span>Subtotal</span>
                    <span>৳{cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Tax (5%)</span>
                    <span>৳{Math.round(cartTotal * 0.05)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-white pt-4 border-t border-stone-800">
                    <span>Total</span>
                    <span>৳{Math.round(cartTotal * 1.05)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Method */}
            <div className="bg-stone-900 p-6 rounded-2xl border border-stone-800">
              <h2 className="text-xl font-bold text-amber-50 mb-4">Delivery Method</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setDeliveryMethod('delivery')}
                  className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${
                    deliveryMethod === 'delivery'
                      ? 'bg-amber-600/20 border-amber-500 text-amber-500'
                      : 'bg-stone-800 border-stone-700 text-stone-400 hover:bg-stone-700'
                  }`}
                >
                  <Truck className="h-6 w-6" />
                  <span className="font-medium">Home Delivery</span>
                </button>
                <button
                  onClick={() => setDeliveryMethod('pickup')}
                  className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${
                    deliveryMethod === 'pickup'
                      ? 'bg-amber-600/20 border-amber-500 text-amber-500'
                      : 'bg-stone-800 border-stone-700 text-stone-400 hover:bg-stone-700'
                  }`}
                >
                  <Store className="h-6 w-6" />
                  <span className="font-medium">Store Pickup</span>
                </button>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-stone-900 p-6 rounded-2xl border border-stone-800">
              <h2 className="text-xl font-bold text-amber-50 mb-4">Payment Method</h2>
              <div className="space-y-3">
                {['bKash', 'Rocket', 'Card Payment', 'Cash on Delivery'].map((method) => (
                  <button
                    key={method}
                    onClick={() => setPaymentMethod(method)}
                    className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all ${
                      paymentMethod === method
                        ? 'bg-amber-600/20 border-amber-500 text-amber-500'
                        : 'bg-stone-800 border-stone-700 text-stone-400 hover:bg-stone-700'
                    }`}
                  >
                    <span className="font-medium">{method}</span>
                    {paymentMethod === method && <CheckCircle className="h-5 w-5" />}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!paymentMethod}
              className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-stone-800 disabled:text-stone-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all"
            >
              Continue to Confirm
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-3xl font-bold text-white font-serif mb-8">Confirm Order</h1>
            
            <div className="bg-stone-900 p-8 rounded-2xl border border-stone-800 space-y-6">
              <div className="space-y-2">
                <h3 className="text-stone-400 text-sm uppercase tracking-wider">Delivery</h3>
                <p className="text-xl font-medium text-white capitalize">{deliveryMethod}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-stone-400 text-sm uppercase tracking-wider">Payment</h3>
                <p className="text-xl font-medium text-white">{paymentMethod}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-stone-400 text-sm uppercase tracking-wider">Total Amount</h3>
                <p className="text-3xl font-bold text-amber-500">৳{Math.round(cartTotal * 1.05)}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 bg-stone-800 hover:bg-stone-700 text-white py-4 rounded-xl font-bold transition-all"
              >
                Back
              </button>
              <button
                onClick={handleOrder}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all"
              >
                Place Order
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="bg-green-500/20 p-6 rounded-full inline-block mb-8">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-white font-serif mb-4">Order Confirmed!</h1>
            <p className="text-stone-400 text-lg mb-8 max-w-md mx-auto">
              Thank you for your order. We are preparing your delicious food. You will receive a confirmation SMS shortly.
            </p>
            <Link
              to="/"
              className="inline-block bg-stone-800 hover:bg-stone-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Back to Home
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
