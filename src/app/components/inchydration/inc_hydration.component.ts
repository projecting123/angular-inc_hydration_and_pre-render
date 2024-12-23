import { Component, inject } from '@angular/core';
import { IncHydrationFirst } from '../../directives/inchydrationfirst.directive';
import { IncHydrationSecond } from '../../directives/inchydrationsecond.directive';
import { IncHydrationService } from '../../services/inc_hydration.service';
import { InchydrationchildComponent } from "../inchydrationchild/inchydrationchild.component";

@Component({
  selector: 'app-incremental_hydration',
  imports: [IncHydrationFirst, IncHydrationSecond, InchydrationchildComponent],
  templateUrl: './inc_hydration.component.html',
  styleUrl: './inc_hydration.component.css'
})
export class incremental_hydrationComponent {
  hs = inject(IncHydrationService);
  
  constructor() {
  }
}
