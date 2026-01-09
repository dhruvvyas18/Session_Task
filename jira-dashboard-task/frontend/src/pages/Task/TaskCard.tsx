import { updateStatus } from "../../api/TaskApi";
import { statusEnum } from "../../common/enums/commonEnums";
import type { JiraTicket } from "../../common/interface/commonInterface";
import { useTaskStore } from "../../store/TaskStore";

const TaskCard = (props: { data: JiraTicket }) => {
  const IsDone = props.data.status === statusEnum.DONE;
  const { fetchTask } = useTaskStore();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const changeStatus = async () => {
      const { isSuccess, data } = await updateStatus(
        props.data.id,
        e.target.value as statusEnum
      );
      if (isSuccess) {
        fetchTask();
        console.log(data);
      }
    };
    changeStatus();
  };
  return (
    <>
      {props.data && (
        <div className="tw:bg-gray-200  tw:flex tw:flex-col tw:gap-2 tw:shadow-sm tw:shadow-amber-100 tw:rounded-xl tw:p-4 tw:m-4 ">
          <div className="tw:font-bold tw:text-[13px] tw:bg-red-300 tw:p-1 tw:rounded-md tw:self-end">
            {/* #Forntend */}#{props.data.category || "General"}
          </div>
          <div className="tw:flex tw:items-start tw:gap-3">
            <div
              className={`tw:w-6 ${
                IsDone ? "tw:bg-green-700" : "tw:bg-gray-700"
              }  tw:rounded-4xl tw:aspect-square`}
            ></div>

            <p className="tw:text-xl tw:flex-1 tw:font-semibold">
              {/* Fix login page error */}
              {props.data.title}
            </p>
          </div>

          <div className="tw:text-md">{props.data.description}</div>
          <div className="tw:font-light">
            Date : {props.data.createdAt ? props.data.createdAt.split("T")[0] : "N/A"}
          </div>
          <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-2">
            Assign to :{" "}
            <span
              className="tw:flex tw:rounded-2xl tw:flex-wrap tw:py-1 tw:px-2 tw:font-bold tw:opacity-80 tw:bg-yellow-200 tw:break-all
"
            >
              {/* Dhruv */}
              {props.data.assignee}
            </span>
          </div>
          <div className="tw:flex tw:items-center tw:gap-3 ">
            <div>Status : </div>
            <div>
              <select
                onChange={handleChange}
                className="tw:outline-1 tw:p-2 tw:rounded-md  tw:cursor-pointer"
              >
                <option
                  selected={props.data.status === statusEnum.TODO}
                  disabled={props.data.status === statusEnum.TODO}
                  defaultValue={statusEnum.TODO}
                >
                  To Do
                </option>
                <option
                  selected={props.data.status === statusEnum.INPROGRESS}
                  disabled={props.data.status === statusEnum.INPROGRESS}
                  defaultValue={statusEnum.INPROGRESS}
                >
                  In Progress
                </option>
                <option
                  selected={props.data.status === statusEnum.INREVIEW}
                  disabled={props.data.status === statusEnum.INREVIEW}
                  defaultValue={statusEnum.INREVIEW}
                >
                  In Review
                </option>
                <option
                  selected={props.data.status === statusEnum.DONE}
                  disabled={props.data.status === statusEnum.DONE}
                  defaultValue={statusEnum.DONE}
                >
                  Done
                </option>
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskCard;
