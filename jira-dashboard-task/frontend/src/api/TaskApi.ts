import { API_URL } from "../common/Constant";
import type { statusEnum } from "../common/enums/commonEnums";
import type { JiraTicket } from "../common/interface/commonInterface";

export async function getAllTask() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    return {
      isSuccess: false,
      data: { response: "something went wrong Whil fetch Data" },
    };
  }
  const responseJson = await response.json();
  return { isSuccess: true, response: responseJson };
}

export async function getUserFilterData(user?: string, status?: string) {
  let response;
  if (status) {
    response = await fetch(
      API_URL + "search/user/?user=" + user + "&status=" + status
    );
  } else {
    response = await fetch(API_URL + "search/user/?user=" + user);
  }
  if (!response.ok) {
    return {
      isSuccess: false,
      data: { response: "something went wrong Whil fetch Data" },
    };
  }
  const responseJson = await response.json();
  return { isSuccess: true, response: responseJson };
}

export async function getSearchTask(content: string) {
  const response = await fetch(API_URL + "search/" + content);
  if (!response.ok) {
    return {
      isSuccess: false,
      data: { response: "something went wrong While fetch Data" },
    };
  }
  const responseJson = await response.json();
  return { isSuccess: true, response: responseJson };
}

export async function updateStatus(id: string, status: statusEnum) {
  const response = await fetch(API_URL + "update/" + id, {
    method: "PUT",
    body: JSON.stringify({ status: status }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    return {
      isSuccess: false,
      data: { response: "something went wrong While Update Data" },
    };
  }
  return {
    isSuccess: true,
    data: { response: "Status Update SuccessFully" },
  };
}

export async function addTask(task: JiraTicket) {
  const response = await fetch(API_URL + "addTask", {
    method: "POST",
    body: JSON.stringify({ task: task }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    return {
      isSuccess: false,
      data: { response: "something went wrong Whil Update Data" },
    };
  }
  return {
    isSuccess: true,
    data: { response: "Data SuccessFully" },
  };
}
