import { useSelector } from "react-redux";
import CheckoutCard from "./CheckoutCard";
import type { RootState } from "../../store/redux-container";
import { Link } from "react-router";
import Price from "../UI/Price";

const Checkout = (props: { closeModal: () => void }) => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalDiscount = (
    <Price
      amount={items.reduce((acc, ele) => {
        return acc + (ele.totalPrice - ele.totalDiscountPrice);
      }, 0)}
    />
  );
  const totalPrice = (
    <Price
      amount={items.reduce((acc, ele) => {
        return acc + ele.totalDiscountPrice;
      }, 0)}
    />
  );
  const totalItems = items.length;

  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className="tw:bg-white tw:h-[96%] tw:w-[26%] tw:items-center  tw:overflow-scroll"
      >
        <div className="tw:h-full tw:w-full ">
          {/* Header  */}
          <div className="tw:flex tw:items-center tw:justify-between tw:sticky tw:top-0 tw:bg-white">
            <div className="tw:m-5 tw:font-bold">Your Cart </div>
            <div
              onClick={() => props.closeModal()}
              className="tw:me-4 tw:cursor-pointer"
            >
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.5"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                />
                <path
                  d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Divider  */}
          <div className="tw:h-[1px] tw:w-full tw:bg-black tw:outline-0 tw:sticky tw:top-16 tw:flex"></div>
          {/* Body  */}
          <div className="tw:overflow-y-scroll tw:h-[66%]  tw:flex tw:flex-col">
            {items!.map((product) => {
              return <CheckoutCard key={product.id} product={product} />;
            })}
            {totalItems === 0 && (
              <div className="tw:items-center tw:flex tw:flex-col tw:justify-center tw:w-full tw:h-full">
                <div>Your cart is empty </div>
                <Link to={"/"} onClick={props.closeModal}>
                  <div className="tw:border-b-1">Continue Shopping</div>
                </Link>
              </div>
            )}
          </div>
          {/* footer  */}
          <div className="tw:p-7 ">
            <div className="tw:flex tw:flex-col tw:gap-2">
              {/* Discount  */}
              <div className="tw:flex tw:justify-between">
                <div className="tw:font-light tw:text-[14px]">Discount</div>
                <div>₹ {totalDiscount}</div>
              </div>

              {/* Shipping  */}
              <div className=" tw:flex tw:justify-between">
                <div>Shipping</div>
                <div>Free</div>
              </div>

              {/* Total  */}

              <div className=" tw:flex tw:justify-between">
                <div className="tw:font-bold">Total</div>
                <div className="tw:font-bold tw:text-[18px]">
                  ₹ {totalPrice}
                </div>
              </div>

              {/* checkout button  */}

              <div className="tw:mt-1">
                <button
                  disabled={totalItems === 0}
                  onClick={() => console.log("Clicked")}
                  className={`tw:uppercase ${
                    totalItems === 0 ? "" : "tw:cursor-pointer"
                  } tw:text-center tw:text-[15px] 
                tw:tracking-[1px]  tw:w-full ${
                  totalItems === 0 ? "tw:bg-gray-600" : "tw:bg-blue-700"
                }  tw:font-bold tw:rounded-4xl tw:text-white tw:p-4`}
                >
                  checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
