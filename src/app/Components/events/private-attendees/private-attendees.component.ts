import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  firstName: string;
  position: number;
  n19: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, firstName: 'Sai Kumar', n19: 919612305, symbol: 's546561@nwmissouri.edu'},
  {position: 2, firstName: 'Sumanth', n19: 919612305, symbol: 's546561@nwmissouri.edu'},
  {position: 3, firstName: 'Varsh', n19: 919612305, symbol: 's546561@nwmissouri.edu'},
  {position: 4, firstName: 'Harshitha', n19: 919612305, symbol: 's546561@nwmissouri.edu'},
  {position: 5, firstName: 'Vikas', n19: 919612305, symbol: 's546561@nwmissouri.edu'},
];
@Component({
  selector: 'app-private-attendees',
  templateUrl: './private-attendees.component.html',
  styleUrls: ['./private-attendees.component.scss']
})
export class PrivateAttendeesComponent {
  displayedColumns: string[] = ['select', 'position', 'firstName', 'n19', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
