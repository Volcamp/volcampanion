import {Plan} from "../DTO/Plan";

export abstract class DataService{
  abstract providePlansList() : Plan[]
}
