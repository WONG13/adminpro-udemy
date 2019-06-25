import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";
import { element } from "protractor";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html"
})
export class IncrementadorComponent implements OnInit {
  @ViewChild("inputPorcent") inputPorcent: ElementRef;
  @Output() getValue: EventEmitter<number> = new EventEmitter();
  @Input() label: string = "";
  @Input() porcent: number = 50;

  constructor() {}

  ngOnInit() {}

  changeValue(value: number) {
    if (
      (this.porcent >= 100 && value > 0) ||
      (this.porcent <= 0 && value < 0)
    ) {
      return;
    }
    this.porcent += value;

    this.getValue.emit(this.porcent);
    this.inputPorcent.nativeElement.focus();
  }

  onChanges(newValue: number) {
    if (newValue >= 100) {
      this.porcent = 100;
    } else if (newValue <= 0) {
      this.porcent = 0;
    } else {
      this.porcent = newValue;
    }

    this.inputPorcent.nativeElement.value = this.porcent;
    this.getValue.emit(this.porcent);

  }
}
