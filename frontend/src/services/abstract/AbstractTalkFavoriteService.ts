import {Planning} from "../../data/dto/input/Planning";
import {Observable} from "rxjs";

export abstract class AbstractTalkFavoriteService {
  abstract addToFavorite(planning: Planning): void;

  abstract removeFromFavorite(planning: Planning): void;

  abstract getFavorites(idConf?: string, fromApi? : boolean): Observable<Planning[]> ;
}
