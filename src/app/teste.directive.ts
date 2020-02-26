import { Directive, Input, HostListener, Renderer2, ElementRef, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: 'p[appTeste]'
})
export class TesteDirective implements OnInit {

  constructor(
    private renderer: Renderer2,
    private elementeref: ElementRef
  ) { }

  @Input('appTeste') defaultColor: string;
  @Input() color: string;

  @HostBinding('style.backgroundColor') backgroundcolor: string;

  @HostListener('mouseenter') mouseenter() {
    this.backgroundcolor = this.color;
  }
  @HostListener('mouseleave') mouseleave() {
    this.backgroundcolor = this.defaultColor || null;
  }

  ngOnInit(): void {
    this.backgroundcolor = this.defaultColor || null;
  }
}
