import { Component, Input } from "@angular/core";

@Component({
  selector: `app-text`,
  template: `
    <ng-content></ng-content>
  `
})
export class TextComponent {
  @Input() style: "normal" | "strong";
}
