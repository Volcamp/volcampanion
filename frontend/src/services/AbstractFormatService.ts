import {Observable} from "rxjs";
import {Format} from "../data/dto/input/Format";

export abstract class AbstractFormatService {
  abstract getFormats(): Observable<Format[]>
}
