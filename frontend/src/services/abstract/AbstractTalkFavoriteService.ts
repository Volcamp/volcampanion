import {Planning} from "../../data/dto/input/Planning";
import {Observable} from "rxjs";

export abstract class AbstractTalkFavoriteService {
  abstract addToFavorite(planning: Planning): Observable<boolean>;

  abstract removeFromFavorite(planning: Planning): Observable<boolean>;

  abstract getFavorites(idConf?: string, fromApi? : boolean): Observable<Planning[]>;
}
