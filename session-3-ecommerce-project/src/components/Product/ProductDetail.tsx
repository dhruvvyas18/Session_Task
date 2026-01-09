import Sidebar from "./Sidebar";
import ImagePart from "./ImagePart";
import { useParams } from "react-router";
import { products } from "../../assets/DummyData";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Price from "../UI/Price";
import { toast } from "react-toastify";

function ProductDetail() {
  const productId = useParams().id;
  const product = products.find((prod) => prod.id === productId);
  const dispatch = useDispatch();
  const onAddToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: product?.id,
        price: product?.price,
        discountPrice: product?.discountPrice,
        image: product?.image,
        name: product?.name,
      })
    );
    toast.success("Product added to cart", { position: "top-center" });
  };
  return (
    <div className="tw:h-full tw:w-[96%]   tw:m-11 tw:mt-0 tw:rounded-2xl">
      <div className="tw:bg-white tw:flex tw:flex-row tw:gap-10 tw:p-9 tw:rounded-4xl tw:pt-16">
        <Sidebar imgUrl={product!.altImage!} />
        <ImagePart imgUrl={product!.image!} />
        <div className="tw:w-[48%] tw:flex tw:flex-col tw:gap-1  ">
          <div className="tw:text-sm tw:font-semibold tw:z-0  tw:tracking-[3px] tw:opacity-40">
            CCA
          </div>
          <div className="tw:text-[46px] tw:font-bold  tw:opacity-80">
            {product?.name}
          </div>
          <div className="tw:font-light  tw:opacity-60 ">
            {product?.description}
          </div>
          <div className="tw:w-full tw:opacity-30 tw:my-8 tw:h-[1px] tw:border-1"></div>
          <div className="tw:flex  tw:gap-4 tw:items-end  ">
            <span className="tw:text-blue-600 tw:font-bold tw:text-xl tw:self-end  ">
              ₹ <Price amount={product!.discountPrice!} />
            </span>
            <span className="tw:text-sm tw:line-through tw:opacity-45 tw:font-light">
              MRP : ₹ <Price amount={product!.price} />
            </span>
          </div>
          <div className="tw:text-[13px] tw:opacity-65">
            Includes GST of ₹ 152{" "}
          </div>
          <div className="tw:opacity-60">
            791 audiophiles chose to buy this in the last 30 days
          </div>
          <button
            onClick={onAddToCartHandler}
            className="tw:uppercase tw:bg-blue-600 tw:p-5 tw:text-white tw:tracking-[3px] tw:mt-8 tw:rounded-4xl tw:cursor-pointer tw:hover:bg-gray-600"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
