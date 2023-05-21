import {Planning} from "../data/dto/Planning";
import {Observable} from "rxjs";

export abstract class AbstractPlanningService {
  abstract getPlannings(idConf: string): Observable<Planning[]>

}
