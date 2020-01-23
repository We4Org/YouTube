import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

export const onSideNavChange = trigger("onSideNavChange", [
  state(
    'false',
    style({
      width: "70px"
    })
  ),
  state(
    "true",
    style({
      width: "170px"
    })
  ),
  transition("true <=> false", animate("300ms"))
]);

export const onMainContentChange = trigger("onMainContentChange", [
  state(
    "false",
    style({
      "margin-left": "70px"
    })
  ),
  state(
    "true",
    style({
      "margin-left": "170px"
    })
  ),
  transition("true <=> false", animate("300ms"))
]);
