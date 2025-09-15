import React from "react";
import { createPortal } from "react-dom";
interface ModalProp {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}
const Modal = (props: ModalProp) => {
  if (!props.open) return null;
  return createPortal(
    <div
      onClick={props.onClose}
      className="tw:fixed tw:top-0 tw:overflow-hidden  tw:w-[100%] tw:z-50 tw:items-center tw:bg-black/50  tw:pe-2 tw:flex tw:justify-end tw:h-[100%] "
    >
      {props.children}
    </div>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Modal;
