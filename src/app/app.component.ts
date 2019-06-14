import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-link [link]="'/'">My links are green</app-link>

    <app-text [style]="'normal'">
      But nested ones:
      <app-link [link]="'/'">
        are not?
      </app-link>
    </app-text>
  `
})
export class AppComponent {}
