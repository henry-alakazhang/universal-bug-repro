import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  template: `
    <app-text [style]="'normal'">
      <app-link [link]="'/dashboard'">
        Should just be one link
      </app-link>
    </app-text>

    <app-text [style]="'normal'">
      A
      <app-text [style]="'normal'">B</app-text>
      A
    </app-text>
  `
})
export class DashboardComponent {}
