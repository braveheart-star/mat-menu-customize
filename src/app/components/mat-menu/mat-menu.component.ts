import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewEncapsulation,
} from '@angular/core';

export interface MenuItem {
  image: string;
  value: any;
}

@Component({
  selector: 'app-mat-menu',
  templateUrl: './mat-menu.component.html',
  styleUrls: ['./mat-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MatMenuComponent implements OnChanges {
  // tslint:disable-next-line: variable-name
  private _value: MenuItem;
  @Output()
  readonly selectionChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() items: MenuItem[] = [];

  @Input()
  get value(): MenuItem {
    return this.items[0];
  }
  set value(item: MenuItem) {
    this._value = item;
  }

  @Output()
  readonly addNew: EventEmitter<string> = new EventEmitter();

  select(optionIndex: number): void {
    if (optionIndex < 0) {
      console.error('Select a value from items array');
      return;
    }
    const temp = [...this.items];
    temp.splice(optionIndex, 1);
    this.items = [this.items[optionIndex], ...temp];
    this.selectionChange.emit(this.items[0].value);
  }

  ngOnChanges(): void {
    this.select(this.items.indexOf(this._value || this.items[0]));
  }
}
