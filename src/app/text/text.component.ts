import { Component, Input } from "@angular/core";

@Component({
  selector: `app-text`,
  template: `
    <ng-container [ngSwitch]="style">
      <p *ngSwitchCase="'normal'">
        <ng-container *ngTemplateOutlet="injectedContent"></ng-container>
      </p>

      <strong *ngSwitchCase="'strong'">
        <ng-container *ngTemplateOutlet="injectedContent"></ng-container>
      </strong>
    </ng-container>

    <ng-template #injectedContent>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class TextComponent {
  @Input() style: "normal" | "strong";
}
