import { Time } from "@angular/common";
import { PersonModel } from "../../modules/shared/models/person.model";

export interface ChatModel {
  id?: number | string;
  emitter: PersonModel;
  receiver: PersonModel;
  message: string;
  date: Date;
  time: Time;
  image?: string;
}
