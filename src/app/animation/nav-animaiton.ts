import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

export const onSideNavChange = trigger("onSideNavChange", [
  state(
    "close",
    style({
      width: "70px"
    })
  ),
  state(
    "open",
    style({
      width: "200px"
    })
  ),
  transition("close <=> open", animate("300ms"))
]);

export const onMainContentChange = trigger("onMainContentChange", [
  state(
    "close",
    style({
      "margin-left": "70px"
    })
  ),
  state(
    "open",
    style({
      "margin-left": "200px"
    })
  ),
  transition("close <=> open", animate("300ms"))
]);
