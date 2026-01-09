import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Price from "../UI/Price";
import type { checkOutProps } from "../../common/interfaces/commonInterface";
import { toast } from "react-toastify";

const CheckoutCard = (props: checkOutProps) => {
  const dispatch = useDispatch();
  const onAddItemToCartHandler = () => {
    dispatch(cartActions.addItemToCart(props.product));
  };
  const onRemoveItemToCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.product.id));
  };

  const onRemoveAllItemToCartHandler = () => {
    dispatch(cartActions.removeTotalQunatityFromCart(props.product.id));
    toast.success("All item removed from cart", { position: "top-center" });
  };
  return (
    <div className=" tw:flex tw:p-3 tw:m-4 tw:shadow-xl tw:w-[95%]">
      {/* ImagePart  */}
      <div>
        <img
          width={120}
          className="tw:rounded-2xl "
          src={props.product.image}
          alt="Product"
        />
      </div>
      <div className="tw:ms-4 tw:flex tw:flex-col   tw:w-[88%]">
        {/* title and delete  */}
        <div className="tw:flex tw:justify-between ">
          <div className="tw:text-wrap tw:text-[14px]  tw:mt-0 tw:me-4">
            {/* V-MODA - Over-Ear Headphone Shield Kit */}
            {props.product.name}
          </div>
          <div
            onClick={onRemoveAllItemToCartHandler}
            className="tw:cursor-pointer"
          >
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7H20"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 7V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V7"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Color  */}

        <div className="tw:text-[12px] tw:font-light">Color : Croc Red</div>

        {/* Increse and descrese Quantity and Price  */}

        <div className="tw:flex tw:justify-between  tw:mt-3">
          {/* Quantity  */}
          <div className="tw:flex tw:items-center tw:w-[45%] tw:outline-1 tw:outline-black/50  tw:rounded-3xl  tw:px-3 tw:gap-5.5">
            <span
              onClick={onRemoveItemToCartHandler}
              className="tw:text-4xl tw:cursor-pointer"
            >
              -
            </span>
            <span className="tw:text-xl">{props.product.quantity}</span>
            <span
              onClick={onAddItemToCartHandler}
              className="tw:text-4xl tw:font-light  tw:cursor-pointer"
            >
              +
            </span>
          </div>
          {/* Price  */}
          <div className="tw:flex  tw:justify-end tw:gap-2 tw:items-center tw:text-md tw:w-auto tw:flex-wrap">
            <div className="tw:line-through tw:font-light">
              ₹ <Price amount={props.product.totalPrice} />
            </div>
            <div>
              ₹ <Price amount={props.product.totalDiscountPrice} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
