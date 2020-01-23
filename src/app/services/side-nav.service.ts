import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SideNavService {
  private _sideNavOpen = false;
  constructor() {}

  get isOpen(): boolean {
    return this._sideNavOpen;
  }

  closeNav() {
    this._sideNavOpen = false;
  }

  toggle() {
    this._sideNavOpen = !this._sideNavOpen;
  }
}
