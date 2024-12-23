import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIncChildHydration]'
})
export class IncChildHydrationDirective {
  
  hostEl = inject(ElementRef)
  renderer = inject(Renderer2)
  
  constructor() { 
    console.log('Child directive of INCREMENTAL HYDRATION');
  }

  ngOnInit() {
    this.renderer.addClass(this.hostEl.nativeElement, 'incremental_hydration');
  }

}
