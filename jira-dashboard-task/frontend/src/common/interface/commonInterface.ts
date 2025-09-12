import type { categoryEnum, statusEnum } from "../enums/commonEnums";

export interface JiraTicket {
  id: string;
  title: string;
  description: string;
  status: statusEnum;
  assignee: string;
  category: categoryEnum;
  createdAt: string;
}
