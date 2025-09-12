import React from "react";
import { createPortal } from "react-dom";
import { useModalStore } from "../../store/modalStore";
interface AddModalProp {
  children: React.ReactNode;
}
const AddModal: React.FC<AddModalProp> = ({ children }) => {
  const { setClose } = useModalStore();
  return createPortal(
    <div
      onClick={setClose}
      className="tw:absolute  tw:top-0 tw:h-screen tw:bg-black/50 tw:justify-center tw:flex tw:items-center tw:w-screen tw:z-50"
    >
      {children}
    </div>,
    document.getElementById("portal") as HTMLElement
  );
};

export default AddModal;
