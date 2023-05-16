import { Injectable } from '@angular/core';
import {Planning} from "../../../../dto/Planning";

@Injectable({
  providedIn: 'root'
})
export abstract class OrganisePlanningsService {
  abstract organise(plannings : Planning[]) : Planning[]
}
