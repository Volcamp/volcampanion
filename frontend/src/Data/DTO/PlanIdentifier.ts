import {Plan} from "./Plan";
import {TYPE_BREAK_PLAN} from "./BreakPlan";
import {TYPE_DIVIDER_PLAN} from "./DividerPlan";

export class PlanIdentifier {

  isBreak (plan : Plan){ return  plan.getType().toLowerCase()==TYPE_BREAK_PLAN.toLowerCase() }

  isDivider(plan:Plan){ return plan.getType().toLowerCase()==TYPE_DIVIDER_PLAN.toLowerCase() }

  isTalk (plan : Plan){
    return !this.isBreak(plan) && !this.isDivider(plan);
  }

}
