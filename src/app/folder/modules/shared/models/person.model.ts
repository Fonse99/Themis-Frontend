import { UserModel } from "./user.model";

export interface PersonModel {
  name: string;
  lastName: string;
  dni: string;
  phone: string;
  address: string;
  city: string;
  department: string;
  user?: UserModel;
}
