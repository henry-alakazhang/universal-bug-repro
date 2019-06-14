import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="Big">
      In a div: <ng-container *ngIf="false; else template"></ng-container>
    </div>
    <p class="Big">
      In a p: <ng-container *ngIf="false; else template"></ng-container>
    </p>

    <ng-template #template>
      <div>
        Foobar
      </div>
    </ng-template>
  `,
  styles: [
    `
      .Big {
        font-size: 26px;
      }
    `
  ]
})
export class AppComponent {}
