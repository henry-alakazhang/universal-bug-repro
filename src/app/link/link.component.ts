import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-link",
  template: `
    <ng-container [ngSwitch]="type">
      <a *ngSwitchCase="'link'" [routerLink]="link">
        <ng-container *ngTemplateOutlet="linkElement"></ng-container>
      </a>

      <button *ngSwitchCase="'strong'" [routerLink]="link">
        <ng-container *ngTemplateOutlet="linkElement"></ng-container>
      </button>
    </ng-container>

    <ng-template #linkElement>
      <ng-content></ng-content>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent {
  @Input() link: string;
  @Input() type: "button" | "link" = "link";
}
