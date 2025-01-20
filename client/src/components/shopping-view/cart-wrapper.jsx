import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import UserCartItemsContent from "./cart-items-content";

function UserCartWrapper({ cartItems, setOpenCartSheet }) {
  const navigate = useNavigate();

  const totalCartAmount =
    cartItems && cartItems.length > 0
      ? cartItems.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Your Cart</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col h-full">
        <div className="overflow-x-hidden flex-grow">
          <div className="mt-8 space-y-4">
            {cartItems && cartItems.length > 0
              ? cartItems.map((item) => (
                  <UserCartItemsContent cartItem={item} />
                ))
              : null}
          </div>
        </div>
        <div className="mt-8 space-y-4 mb-5">
          <div className="flex justify-between">
            <span className="font-bold">Total</span>
            <span className="font-bold">${totalCartAmount}</span>
          </div>
          <Button
            onClick={() => {
              navigate("/shop/checkout");
              setOpenCartSheet(false);
            }}
            className="w-full mt-6"
          >
            Checkout
          </Button>
        </div>
      </div>
    </SheetContent>
  );
}

export default UserCartWrapper;
