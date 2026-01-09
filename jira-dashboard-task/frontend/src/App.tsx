import { Formik } from "formik";
import { categoryEnum, statusEnum } from "./common/enums/commonEnums";
import AddModal from "./components/modal/AddModal";
import Home from "./pages/Home/Home";
import { useModalStore } from "./store/modalStore";
import type { JiraTicket } from "./common/interface/commonInterface";
import { useState } from "react";
import { addTask } from "./api/TaskApi";
import { useTaskStore } from "./store/TaskStore";
import { toast, ToastContainer } from "react-toastify";
import { getAddTaskSchema } from "./schemas/commonSchema";

function App() {
  const { isOpen, setClose } = useModalStore();
  const { addnewTask } = useTaskStore();
  const initialValues: JiraTicket = {
    id: "",
    assignee: "Dhruv",
    category: categoryEnum.FRONTEND,
    createdAt: "",
    description: "",
    status: statusEnum.TODO,
    title: "",
  };
  const [loading, setLoading] = useState(false);
  const submitHandler = (values: JiraTicket) => {
    values.createdAt = new Date().toISOString().split("T")[0];
    values.id = Date.now().toString(36) + Math.random().toString(36).slice(2);
    console.log(values);
    const addNewTask = async () => {
      setLoading(true);
      try {
        const { data, isSuccess } = await addTask(values);
        if (isSuccess) {
          addnewTask(values);
          console.log(data);
          toast.success("Task assign");
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
        setClose();
      }
    };
    addNewTask();
  };
  return (
    <>
      <Home />
      {isOpen && (
        <AddModal>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className=" tw:bg-white tw:rounded-xl tw:p-8  tw:flex tw:flex-col tw:gap-6 tw:w-[50%] tw:h-auto "
          >
            <div className="tw:mb-5 tw:flex tw:justify-between">
              <div className="tw:text-3xl">Add Task</div>
              <div onClick={() => setClose()} className="tw:cursor-pointer">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z"
                    fill="#0F0F0F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                    fill="#0F0F0F"
                  />
                </svg>
              </div>
            </div>

            <div>
              <Formik
                initialValues={initialValues}
                onSubmit={submitHandler}
                validationSchema={getAddTaskSchema()}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="tw:mb-4">
                      <label className="tw:text-xl tw:m-5 tw:me-[12%]">
                        Title :
                      </label>
                      <input
                        className="tw:outline-2 tw:w-80 tw:p-2 tw:rounded-xl"
                        type="text"
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        placeholder="Enter Title"
                      />
                      {errors.title && touched && (
                        <div className="tw:text-red-600 tw:flex tw:ms-42 tw:mt-2">
                          {errors.title}
                        </div>
                      )}
                    </div>

                    <div className="tw:mb-4 tw:flex">
                      <label className="tw:text-xl tw:m-5">Description :</label>

                      <textarea
                        rows={4}
                        cols={60}
                        name="description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        className=" tw:outline-2 tw:p-2.5  tw:text-md tw:text-gray-900 tw:bg-gray-50 tw:rounded-lg border tw:border-gray-300 "
                        placeholder="Write Description here..."
                      ></textarea>
                    </div>
                    {errors.description && touched && (
                      <div className="tw:text-red-600 tw:flex tw:ms-42 tw:mt-2">
                        {errors.description}
                      </div>
                    )}

                    <div className=" tw:flex tw:gap-6">
                      <div className="tw:mb-4 tw:flex tw:w-[50%] tw:items-center">
                        <label className="tw:text-xl tw:m-5 tw:me-[24%]">
                          User :
                        </label>
                        <div className="tw:[&_select]:px-4 tw:[&_select]:py-2 tw:[&_select]:cursor-pointer tw:[&_select]:rounded-md tw:[&_select]:outline-1 ">
                          <select
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="assignee"
                            value={values.assignee}
                          >
                            <option selected value={"Dhruv"}>
                              Dhruv
                            </option>
                            <option value={"Maulik"}>Maulik</option>
                            <option value={"Nandkishor"}>Nandkishor</option>
                            <option value={"Hemanshi"}>Hemanshi</option>
                          </select>
                        </div>
                      </div>

                      <div className="tw:mb-4 tw:flex tw:w-[50%] tw:items-center">
                        <label className="tw:text-xl tw:m-5 tw:me-[12%]">
                          Category :
                        </label>
                        <div className="tw:[&_select]:px-4 tw:[&_select]:py-2 tw:[&_select]:cursor-pointer tw:[&_select]:rounded-md tw:[&_select]:outline-1 ">
                          <select
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="category"
                            value={values.category}
                          >
                            <option selected value={categoryEnum.FRONTEND}>
                              Frontend
                            </option>
                            <option value={categoryEnum.BACKEND}>
                              Backend
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div
                        className="tw:flex tw:gap-8 tw:m-6 tw:justify-end tw:[&_button]:cursor-pointer
                 tw:[&_button]:py-2 tw:[&_button]:px-6 tw:[&_button]:text-[18px] 
                tw:[&_button]:rounded-sm "
                      >
                        <button
                          onClick={() => setClose()}
                          className="tw:bg-gray-600 tw:text-white"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className={`${
                            loading ? "tw:bg-gray-500" : "tw:bg-blue-600"
                          } tw:text-white `}
                        >
                          {loading ? "Adding...." : "Add"}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>

              {/* <div className="tw:mb-4">
                <label className="tw:text-xl tw:m-5 tw:me-[12%]">Title :</label>
                <input
                  className="tw:outline-2 tw:w-80 tw:p-2 tw:rounded-xl"
                  type="text"
                  placeholder="Enter Title"
                />
              </div> */}

              {/* <div className="tw:mb-4 tw:flex">
                <label className="tw:text-xl tw:m-5">Description :</label>

                <textarea
                  rows={4}
                  cols={60}
                  className=" tw:outline-2 tw:p-2.5  tw:text-md tw:text-gray-900 tw:bg-gray-50 tw:rounded-lg border tw:border-gray-300 "
                  placeholder="Write Description here..."
                ></textarea>
              </div> */}

              {/* <div className=" tw:flex tw:gap-6">
                <div className="tw:mb-4 tw:flex tw:w-[50%] tw:items-center">
                  <label className="tw:text-xl tw:m-5 tw:me-[24%]">
                    User :
                  </label>
                  <div className="tw:[&_select]:px-4 tw:[&_select]:py-2 tw:[&_select]:cursor-pointer tw:[&_select]:rounded-md tw:[&_select]:outline-1 ">
                    <select>
                      <option value={"Dhruv"}>Dhruv</option>
                      <option value={"Pratik"}>Pratik</option>
                      <option value={"Nihar"}>Nihar</option>
                      <option value={"Bhavesh"}>Bhavesh</option>
                      <option value={"Parth"}>Parth</option>
                    </select>
                  </div>
                </div>

                <div className="tw:mb-4 tw:flex tw:w-[50%] tw:items-center">
                  <label className="tw:text-xl tw:m-5 tw:me-[12%]">
                    Category :
                  </label>
                  <div className="tw:[&_select]:px-4 tw:[&_select]:py-2 tw:[&_select]:cursor-pointer tw:[&_select]:rounded-md tw:[&_select]:outline-1 ">
                    <select>
                      <option value={categoryEnum.FRONTEND}>Frontend</option>
                      <option value={categoryEnum.BACKEND}>Backend</option>
                    </select>
                  </div>
                </div>
              </div> */}

              {/* <div>
                <div
                  className="tw:flex tw:gap-8 tw:m-6 tw:justify-end tw:[&_button]:cursor-pointer
                 tw:[&_button]:py-2 tw:[&_button]:px-6 tw:[&_button]:text-[18px] 
                tw:[&_button]:rounded-sm "
                >
                  <button
                    onClick={() => setClose()}
                    className="tw:bg-gray-400 tw:text-white"
                  >
                    Close
                  </button>
                  <button className="tw:bg-blue-400 tw:text-white">Add</button>
                </div>
              </div> */}
            </div>
          </div>
        </AddModal>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
