import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-link",
  template: `
    <a [routerLink]="link">
      <ng-container *ngTemplateOutlet="linkElement"></ng-container>
    </a>

    <ng-template #linkElement>
      <div>
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
  styleUrls: ["./link.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent {
  @Input() link: string;
}
