import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  AfterViewInit
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';

export type option = { text: string; id: string; selected?: boolean };

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ng-filter-select',
  templateUrl: './ng-filter-select.component.html',
  styleUrls: ['./ng-filter-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgFilterSelectComponent implements OnInit, AfterViewInit {
  @ViewChild('filterInput') filterInputElementRef: ElementRef;
  @ViewChild('selectBox') selectBoxElementRef: ElementRef;

  @Input() options: option[];
  // tslint:disable-next-line: no-output-native
  @Output() result = new EventEmitter<option>();

  filteredOptions: Observable<option[]>;
  allOptions: Observable<option[]>;
  selectBox: HTMLSelectElement;
  filterInput: HTMLInputElement;

  ngOnInit() {
    this.allOptions = of(this.options);
    this.filteredOptions = this.allOptions;
  }

  ngAfterViewInit() {
    this.selectBox = this.selectBoxElementRef.nativeElement;
    this.filterInput = this.filterInputElementRef.nativeElement;
  }

  changeFilter(value: string) {
        this.selectBox.hidden = false;

        this.filteredOptions = this.allOptions.pipe(
      map(x => {
        const z: option[] = x
          .filter(
            y => y.text.toLocaleLowerCase().indexOf(value.toLowerCase()) > -1
          )
          .map(t => {
            t.selected = false;
            return t;
          });
        z[0].selected = true;
        return z;
      })
    );
  }

  selectOption() {
    this.filterInput.value = this.selectBox.options[
      this.selectBox.selectedIndex
    ].text;
    this.result.emit({
      text: this.selectBox.options[this.selectBox.selectedIndex].text,
      id: this.selectBox.value
    });
    this.selectBox.hidden = true;
  }

  focusSelectBox() {
    this.selectBox.focus();
  }
}
