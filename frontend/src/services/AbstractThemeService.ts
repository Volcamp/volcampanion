import {Observable} from "rxjs";
import {Theme} from "../data/dto/Theme";

export abstract class AbstractThemeService {
  abstract getThemes(): Observable<Theme[]>
}
