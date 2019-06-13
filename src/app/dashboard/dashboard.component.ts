import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  template: `
    <div>
      <app-text [style]="'normal'">
        This text should be normal
      </app-text>
    </div>
    <div>
      <app-text [style]="'strong'">
        This text should be strong
      </app-text>
    </div>
    <div>
      <app-link>
        This is a button
      </app-link>
    </div>
    <div>
      <app-link [link]="'/dashboard'">
        This is a link
      </app-link>
    </div>

    <div>
      <app-text [style]="'normal'">
        <app-link [link]="'/dashboard'">
          And this one will breaky
        </app-link>
      </app-text>
    </div>
  `
})
export class DashboardComponent {}
