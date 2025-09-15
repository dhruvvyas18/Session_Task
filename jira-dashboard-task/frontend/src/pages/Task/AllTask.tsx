/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import type { JiraTicket } from "../../common/interface/commonInterface";
import { statusEnum } from "../../common/enums/commonEnums";
import { useTaskStore } from "../../store/TaskStore";

function AllTask() {
  const [tasks, setTasks] = useState<JiraTicket[]>();
  const {
    tasks: AllTask,
    fetchTask,
    searchUserTask,
    userName,
    status,
  } = useTaskStore();

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  useEffect(() => {
    setTasks(AllTask);
  }, [AllTask]);

  useEffect(() => {
    setTasks(searchUserTask());
  }, [userName, status, AllTask, searchUserTask]);

  return (
    <div className=" w-full">
      {tasks && (
        <div className="tw:flex ">
          <TaskList
            data={tasks.filter((data) => data.status === statusEnum.TODO)}
            title="To do"
          />
          <TaskList
            data={tasks.filter((data) => data.status === statusEnum.INPROGRESS)}
            title="In Progress"
          />
          <TaskList
            data={tasks.filter((data) => data.status === statusEnum.INREVIEW)}
            title="In Review "
          />
          <TaskList
            data={tasks.filter((data) => data.status === statusEnum.DONE)}
            title="Done"
          />
        </div>
      )}
    </div>
  );
}

export default AllTask;
