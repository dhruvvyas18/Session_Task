import TaskCard from "./TaskCard";
import type { TaskListPropType } from "../../common/types/commonTypes";
import { ThreeDot } from "react-loading-indicators";
import { useTaskStore } from "../../store/TaskStore";

const TaskList = (props: TaskListPropType) => {
  const { loading } = useTaskStore();
  return (
    <>
      <div className="tw:relative tw:m-4 tw:w-[23%] tw:border-[1px] tw:h-[650px] tw:overflow-scroll no-scrollbar tw:bg-slate-100">
        {loading && (
          <div className="tw:absolute tw:top-[50%] tw:z-50  tw:w-[100%] tw:flex tw:justify-center ">
            <ThreeDot
              variant="bounce"
              color="#608460"
              size="medium"
              text=""
              textColor=""
            />
          </div>
        )}
        <div className="tw:sticky tw:top-0 tw:z-30  tw:bg-slate-100">
          <div className="tw:text-xl tw:flex tw:justify-between tw:tracking-[4px] tw:p-5 tw:opacity-70 tw:uppercase">
            <div>{props.title}</div>
            <div>{props.data.length}</div>
          </div>
          <div className="tw:h-[1px] tw:w-full tw:border-2 tw:opacity-50"></div>
        </div>
        <div>
          {loading && (
            <div className="tw:bg-slate-200 tw:opacity-35 tw:w-full tw:h-full tw:z-30 tw:absolute"></div>
          )}
          <div>
            {props.data && props.data.length === 0 && (
              <div className="tw:bg-slate-200   tw:w-full tw:h-full tw:-mt-10 tw:z-10 tw:absolute tw:items-center tw:flex tw:justify-center">
                No Task Found
              </div>
            )}
            {props.data &&
              props.data.map((task) => <TaskCard key={task.id} data={task} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
