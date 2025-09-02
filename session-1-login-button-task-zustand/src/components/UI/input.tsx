import React from "react";
import type { InputType } from "../../types/type/commonTypes";
import { InputTypeEnum } from "../../types/type/commonEnums";

function Input(props: InputType) {
  return (
    <>
      <div>
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-700"
        >
          {props.labelText}
        </label>
        <input
          id={props.id}
          name={props.name}
          type={props.type || InputTypeEnum.TEXT}
          required={props.required}
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder={props.placeHolder || `Enter ${props.name}`}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </>
  );
}

export default Input;
