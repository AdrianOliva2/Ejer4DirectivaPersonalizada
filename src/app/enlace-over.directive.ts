import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[enlaceOver]'
})
export class EnlaceOverDirective {

  private textoOriginal?: string;

  constructor(private enlace: ElementRef) { }

  @HostListener('mouseover') onMouseHover() {
    this.textoOriginal = this.enlace.nativeElement.innerHTML;
    this.enlace.nativeElement.innerHTML = this.enlace.nativeElement.innerHTML.toUpperCase();
    this.enlace.nativeElement.style.border = "1px solid #0f0"
  }

  @HostListener('mouseout') onMouseOut() {
    this.enlace.nativeElement.innerHTML = this.textoOriginal;
    this.enlace.nativeElement.style.border = ""
  }

}
