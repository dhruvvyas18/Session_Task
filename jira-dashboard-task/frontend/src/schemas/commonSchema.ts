import * as Yup from "yup";
export const getAddTaskSchema = () => {
  return Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
  });
};
