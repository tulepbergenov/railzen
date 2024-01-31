export interface IApplyModal {
  isOpen: boolean;
  onClose: () => void;
}

export interface IFirstFormSubmitData {
  lastName: string;
  firstName: string;
  middleName: string;
  companyName: string;
  email: string;
  phone: string;
}
