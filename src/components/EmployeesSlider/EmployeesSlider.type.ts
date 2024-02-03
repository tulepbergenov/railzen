import { IDivElement } from "@/shared/types";

export interface IEmployeesSlider extends IDivElement {
  employees: IEmployee[];
  heading: string;
}

interface IEmployee {
  cover?: string;
  name: string;
  position: string;
  alias: string;
}
