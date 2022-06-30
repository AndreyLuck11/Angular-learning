import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  title = '';

  // tslint:disable-next-line:no-output-native
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
