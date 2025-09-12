/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useTaskStore } from "../../store/TaskStore";
import { statusEnum } from "../../common/enums/commonEnums";
import { useModalStore } from "../../store/modalStore";

function MainHeader() {
  const {
    searchTask,
    fetchTask,
    setTrueLoading,
    setFalseLoading,
    setStatus,
    setUser,
    userName,
    status,
  } = useTaskStore();
  const { setOpen } = useModalStore();
  useEffect(() => {
    fetchTask();
  }, []);

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUser(e.target.value);
  };
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };
  const [searchItem, setSearchItem] = useState("");

  const handleClear = () => {
    // resetFilter();
    setSearchItem("");
    setUser("");
    setStatus("");
  };
  useEffect(() => {
    if (searchItem === "") return;
    setTrueLoading();
    const timeOutId = setTimeout(() => {
      searchTask(searchItem);
      setFalseLoading();
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [searchItem]);
  useEffect(() => {
    if (searchItem === "") {
      setTrueLoading();
      fetchTask();
      setFalseLoading();
    }
  }, [searchItem]);

  return (
    <div>
      {" "}
      <div className="tw:flex tw:justify-between ">
        <div className="tw:gap-10 tw:flex">
          <input
            type="text"
            placeholder="Search..... Title/Task"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="tw:outline-2 tw:w-100 tw:rounded-md  tw:p-3 tw:h-full"
          />
          <button
            onClick={() => setOpen()}
            className=" tw:bg-green-700 tw:hover:bg-green-800 tw:text-white tw:px-5 tw:py-3  tw:uppercase tw:rounded-xl tw:cursor-pointer"
          >
            Add
          </button>

          <button
            onClick={handleClear}
            className=" tw:bg-blue-600 tw:hover:bg-blue-700 tw:text-white tw:px-5 tw:py-3  tw:uppercase tw:rounded-xl tw:cursor-pointer"
          >
            Clear
          </button>
        </div>

        <div className="tw:flex tw:gap-5 tw:[&_select]:cursor-pointer tw:h-[-webkit-fill-available] tw:[&_select]:rounded-md tw:[&_select]:outline-1 tw:[&_select]:p-2 ">
          <select onChange={handleUserChange} value={userName}>
            <option selected value="">
              All
            </option>
            <option defaultValue={"Dhurv"}>Dhruv</option>
            <option defaultValue={"Pratik"}>Pratik</option>
            <option defaultValue={"Nihar"}>Nihar</option>
            <option defaultValue={"Bhavesh"}>Bhavesh</option>
            <option defaultValue={"Parth"}>Parth</option>
          </select>
          <select onChange={handleStatusChange} value={status}>
            <option selected value="">
              All
            </option>
            <option>{statusEnum.TODO}</option>
            <option>{statusEnum.INPROGRESS}</option>
            <option>{statusEnum.INREVIEW}</option>
            <option>{statusEnum.DONE}</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
