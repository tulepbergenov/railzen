import * as yup from "yup";
import "yup-phone-lite";

export const firstSchema = yup
  .object()
  .shape({
    lastName: yup.string().required(),
    firstName: yup.string().required(),
    middleName: yup.string().required(),
    companyName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().phone().required(),
  })
  .required();
