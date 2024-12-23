import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncHydrationService {

  constructor() { }

  onclick(){
    console.log('Hello from incremental_hydration service');
  }
}
