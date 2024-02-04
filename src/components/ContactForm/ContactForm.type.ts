export interface IContactForm {
  className?: string;
  isOpen: boolean;
}

export interface IContactFormSubmitData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}
