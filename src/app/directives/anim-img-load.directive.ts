import { Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  	selector: '[app-anim-img-load]'
})
export class AnimImgLoadDirective {

  	constructor(private el: ElementRef, private renderer: Renderer2) {
  		this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale3d(.95,.95,1)');
  		this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
  		setTimeout(()=>{
  			this.renderer.setStyle(this.el.nativeElement, 'transition', 'ease-out .4s transform, ease .8s opacity');
  		},50);
  	}

	@HostListener('load') onLoad() {
		setTimeout(()=>{
		this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale3d(1,1,1)');		
		this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
		},100);
	}

}
