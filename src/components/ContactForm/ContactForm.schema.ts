import * as yup from "yup";
import "yup-phone-lite";

export const contactFormSchema = yup
  .object()
  .shape({
    fullName: yup.string().required(),
    phone: yup.string().phone().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();
