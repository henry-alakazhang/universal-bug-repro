import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-text [style]="'normal'">
      Click here to
      <app-link [link]="'/'">
        reload the dashboard
      </app-link>
    </app-text>
  `
})
export class AppComponent {}
