import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @Input("appHighlight") highlightColor: string;

  @HostListener("mouseenter") onMouseover() {
    this.highlight(this.highlightColor || "red");
  }
  @HostListener("mouseout") onMouseout() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
