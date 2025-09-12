import { categoryEnum, statusEnum } from "./commonEnums";

export interface Tasks {
  id: string;
  title: string;
  description: string;
  status: statusEnum;
  assignee: string;
  category: categoryEnum;
  createdAt: string;
}
