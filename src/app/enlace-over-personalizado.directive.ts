import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[enlaceOverPersonalizado]'
})
export class EnlaceOverPersonalizadoDirective {

  private textoOriginal?: string;

  constructor(private enlace: ElementRef) { }
  @Input('enlaceOverPersonalizado') colores = {
    colorBorde:'borde-verde',
    textoEnlace:'enlace'
  }

  @HostListener('mouseover') onMouseOver() {
    this.textoOriginal = this.enlace.nativeElement.innerHTML;
    this.enlace.nativeElement.innerHTML = this.colores.textoEnlace.toUpperCase();
    this.enlace.nativeElement.className = this.colores.colorBorde;
  }

  @HostListener('mouseout') onMouseOut() {
    this.enlace.nativeElement.innerHTML = this.textoOriginal;
    this.enlace.nativeElement.className = "";
  }

}
