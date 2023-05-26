import {Observable} from "rxjs";
import {Theme} from "../../data/dto/input/Theme";

export abstract class AbstractThemeService {
  abstract getThemes(): Observable<Theme[]>
}
