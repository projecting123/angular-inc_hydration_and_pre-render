import { HttpClient } from '@angular/common/http';
import { Component, input, OnInit, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-data',
  imports: [],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent implements OnInit {
  id = input()
  data:WritableSignal<undefined | {id: string, title: string, description: string}[]> = signal(undefined)
  constructor(private http: HttpClient){

  }
  ngOnInit() {
    this.http.get(`http://localhost:3000/products/${this.id()}`)
    .subscribe((data: any) => this.data.set([data]))
  }
}
