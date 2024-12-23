import { Component } from '@angular/core';
import { IncChildHydrationDirective } from '../../directives/inc-child-hydration.directive';

@Component({
  selector: 'app-inchydrationchild',
  imports: [IncChildHydrationDirective],
  templateUrl: './inchydrationchild.component.html',
  styleUrl: './inchydrationchild.component.css'
})
export class InchydrationchildComponent {

}
