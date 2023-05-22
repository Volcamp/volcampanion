import {Observable} from "rxjs";
import {Format} from "../data/dto/Format";

export abstract class AbstractFormatService {
  abstract getFormats(): Observable<Format[]>
}
