import {Planning} from "../../data/dto/input/Planning";
import {Observable} from "rxjs";

export abstract class AbstractPlanningService {
  abstract getPlannings(idConf: string): Observable<Planning[]>

}
