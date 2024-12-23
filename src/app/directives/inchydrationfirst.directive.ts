import { Directive } from '@angular/core';

@Directive({
  selector: '[inc_hydration_first]'
})
export class IncHydrationFirst {

  constructor() { 
    console.log('First directive of INCREMENTAL HYDRATION');
  }

}
