import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  template: `
    <app-text [style]="'normal'">
      Click here to
      <app-link [link]="'/dashboard'">
        reload the dashboard
      </app-link>
    </app-text>
  `
})
export class DashboardComponent {}
