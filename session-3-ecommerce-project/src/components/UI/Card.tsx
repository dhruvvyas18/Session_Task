import type React from "react";
import type { CardItemProps } from "../../common/types/commonTypes";
import { useNavigate } from "react-router";

const CardItem: React.FC<CardItemProps> = ({ product }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("detail-product/" + product.id);
  };
  return (
    <div
      onClick={onClickHandler}
      className="tw:relative tw:bg-white tw:cursor-pointer tw:min-h-[30rem] tw:w-[19%]  tw:m-0.5 tw:flex tw:flex-col "
    >
      <div className="tw:absolute tw:z-20 tw:top-5 tw:left-4 tw:bg-blue-400 tw:px-1 tw:py-0 tw:text-white tw:rounded-2xl">
        New
      </div>
      {/* <div className="tw:absolute tw:bg-gray-400 tw:px-1 tw:py-0 tw:text-white tw:rounded-2xl">
        Sold out
      </div> */}
      <div className="tw:group tw:w-full tw:aspect-square ">
        <img
          className=" tw:w-full tw:absolute tw:opacity-100 tw:hover:opacity-0 tw:object-cover "
          src={product.image}
          // src=""
        />
        <img
          className=" tw:w-full tw:absolute  tw:opacity-0 tw:hover:opacity-100 tw:transition-all tw:delay-150"
          src={product.altImage ? product.altImage : product.image}
        />
      </div>

      <div className="tw:p-5 tw:flex tw:flex-col tw:gap-2">
        <div className="tw:uppercase tw:font-medium ">{product.name}</div>
        <div className="tw:font-normal">{product.description}</div>
        <div className="tw:flex tw:gap-3">
          <span className="tw:text-blue-500 tw:font-semibold">
            {" "}
            ₹ {product.discountPrice ? product.discountPrice : product.price}
          </span>
          <span className="tw:font-extralight tw:text-gray-500  tw:line-through ">
            ₹ {product.price}
          </span>
        </div>
        <div>
          <span>🥜</span>
          <span>🥇</span>
          <span>🌶️</span>
          <span>💣</span>
          <span>🎉</span>
        </div>
        <div className="tw:flex tw:items-start tw:gap-2 tw:font-medium tw:text- tw:p-1">
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z"
              fill="yellow"
            />
          </svg>
          <span>{product.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
