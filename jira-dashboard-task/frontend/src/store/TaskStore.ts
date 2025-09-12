/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import type { JiraTicket } from "../common/interface/commonInterface";
import { getAllTask, getSearchTask } from "../api/TaskApi";

interface zustandStore {
  tasks: JiraTicket[];
  loading: boolean;
  fetchTask: () => Promise<void>;
  searchTask: (content: string) => Promise<void>;
  setTrueLoading: () => void;
  setFalseLoading: () => void;
  searchUserTask: () => JiraTicket[];
  resetFilter: () => Promise<void>;
  setStatus: (userStatus: string) => void;
  setUser: (userData: string) => void;
  userName: string;
  status: string;
  addnewTask: (newTask: JiraTicket) => void;
}

export const useTaskStore = create<zustandStore>((set, get) => ({
  tasks: [],
  userName: "",
  status: "",
  loading: false,
  fetchTask: async () => {
    const { isSuccess, response } = await getAllTask();

    if (isSuccess) {
      set({ tasks: response });
    }
  },
  resetFilter: async () => {
    const { isSuccess, response } = await getAllTask();

    if (isSuccess) {
      set({ tasks: response });
    }
  },
  searchTask: async (content: string) => {
    const { isSuccess, response } = await getSearchTask(content);
    if (isSuccess) {
      set({ tasks: response });
    }
  },
  setTrueLoading: () => {
    set({ loading: true });
  },
  setFalseLoading: () => {
    set({ loading: false });
  },

  setStatus: (userStatus: string) => set({ status: userStatus }),
  setUser: (userData: string) => set({ userName: userData }),
  searchUserTask: () => {
    const { tasks, status, userName } = get();
    return tasks.filter((task) => {
      const matchedUser = userName ? task.assignee === userName : true;
      const matchedStatus = status ? task.status === status : true;
      return matchedUser && matchedStatus;
    });
  },
  addnewTask: (newTask: JiraTicket) => {
    set((state) => ({ tasks: [...state.tasks, newTask] }));
  },
}));
