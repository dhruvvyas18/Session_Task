import React from "react";
import Sidebar from "./Sidebar";
import ImagePart from "./ImagePart";

function ProductDetail() {
  return (
    <div className="tw:h-full tw:w-[96%]   tw:m-11 tw:mt-0 tw:rounded-2xl">
      <div className="tw:bg-white tw:flex tw:flex-row tw:gap-10 tw:p-9 tw:rounded-4xl tw:pt-16">
        <Sidebar />
        <ImagePart />
        <div className="tw:w-[48%] tw:flex tw:flex-col tw:gap-1  ">
          <div className="tw:text-sm tw:font-semibold tw:z-0  tw:tracking-[3px] tw:opacity-40">
            CCA
          </div>
          <div className="tw:text-[46px] tw:font-bold  tw:opacity-80">
            CCA - Polaris
          </div>
          <div className="tw:font-light  tw:opacity-60 ">
            In-Ears With 1 Dynamic Driver
          </div>
          <div className="tw:w-full tw:opacity-30 tw:my-8 tw:h-[1px] tw:border-1"></div>
          <div className="tw:flex  tw:gap-4 tw:items-end  ">
            <span className="tw:text-blue-600 tw:font-bold tw:text-xl tw:self-end  ">
              ₹ 999
            </span>
            <span className="tw:text-sm tw:line-through tw:opacity-45 tw:font-light">
              MRP : ₹ 1499
            </span>
          </div>
          <div className="tw:text-[13px] tw:opacity-65">
            Includes GST of ₹ 152{" "}
          </div>
          <div className="tw:opacity-60">
            791 audiophiles chose to buy this in the last 30 days
          </div>
          <button className="tw:uppercase tw:bg-blue-600 tw:p-5 tw:text-white tw:tracking-[3px] tw:mt-8 tw:rounded-4xl tw:cursor-pointer tw:hover:bg-gray-600">
            Add to cart
          </button>
          <div className=" tw:flex  tw:mt-6 ">
            <div className="tw:w-[50%] tw:flex tw:flex-col tw:gap-1.5   tw:rounded-xl tw:m-5 tw:bg-slate-200 tw:py-4 tw:px-2 tw:shadow-xl">
              <div className="tw:flex  tw:justify-between ">
                <div className=" tw:uppercase tw:text-[13px] tw:opacity-50 tw:font-semibold">
                  DELIVERY
                </div>
                <div className="tw:me-7 tw:bg-gray-300 tw:rounded-md  tw:flex tw:items-center tw:px-2 tw:justify-between tw:w-[50%]   ">
                  <span className="tw:text-[12px] tw:w-[50%]">4000</span>
                  <span className="tw:text-[12px]">change</span>
                </div>
              </div>
              <div className="tw:flex tw:gap-5  tw:text-[13px]">
                <span>XYZ</span>
                <span>
                  Dispatches in <b>24-48 hours </b>
                </span>
              </div>
              <div className="tw:flex tw:gap-5  tw:text-[13px]">
                <span>XYZ</span>
                <span>
                  Dispatches in <b>24-48 hours </b>
                </span>
              </div>
            </div>
            <div>y</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
