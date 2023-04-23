import {Plan} from "../DTO/Plan";

export abstract class DataService{

  // FIXME you don't need to write list on method that return a list it's already in their definition
  // FIXME If you already want to prepare you code to work when you are going to switch with the ApiDataService
  // FIXME I suggest you to make your method below async ↓ that will for ce use to use the async pipe in the view
  abstract providePlansList() : Plan[]
}
