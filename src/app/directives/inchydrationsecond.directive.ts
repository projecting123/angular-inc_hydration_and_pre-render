import { Directive, ElementRef, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[inc_hydration_second]'
})
export class IncHydrationSecond implements OnInit{

  hostEl = inject(ElementRef);
  renderer = inject(Renderer2)
  constructor() { 
    console.log('Second directive of INCREMENTAL HYDRATION');
  }

  ngOnInit() {
    this.renderer.addClass(this.hostEl.nativeElement, 'incremental_hydration');
  }

}
