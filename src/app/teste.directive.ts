import { Directive, Input, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'p[appTeste]'
})
export class TesteDirective implements OnInit {

  @Input('appTeste') defaultColor: string;
  @Input() color: string;

  constructor(
    private renderer: Renderer2,
    private elementeref: ElementRef
  ) { }

  @HostListener('mouseenter') mouseenter() {
    this.highlight(this.color);
  }
  @HostListener('mouseleave') mouseleave() {
    this.highlight(this.defaultColor || null);
  }

  private highlight(color: string) {
    this.renderer.setStyle(this.elementeref.nativeElement, 'background-color', color);
  }
  ngOnInit(): void {
    this.highlight(this.defaultColor || null);
  }
}
