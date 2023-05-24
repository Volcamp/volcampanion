import {Planning} from "../data/dto/input/Planning";
import {Observable} from "rxjs";

export abstract class AbstractTalkFavoriteService {
  abstract addToFavorite(idTalk: number): void;

  abstract removeFromFavorite(idTalk: number): void;

  abstract getFavorites(idConf: string): Observable<Planning[] | undefined> ;
}
