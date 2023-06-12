import {Planning} from "../../data/dto/input/Planning";
import {Observable} from "rxjs";
import {CreatePlanning} from "../../data/dto/output/CreatePlanning";

export abstract class AbstractPlanningService {
  abstract getPlannings(idConf: string): Observable<Planning[]>

  abstract clearAddPlanning(plannings: CreatePlanning[]): Observable<boolean>
}
