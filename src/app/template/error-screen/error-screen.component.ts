import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error-screen',
  templateUrl: './error-screen.component.html',
  styleUrls: ['./error-screen.component.scss']
})
export class ErrorScreenComponent implements OnInit {


  @Output() refreshEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  refresh(){
    this.refreshEvent.emit(true);
  }

}


