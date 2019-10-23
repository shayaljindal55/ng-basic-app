import { Component, OnInit, Inject } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import {PopUpComponent} from '../pop-up/pop-up.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  mediaQuery: MediaQueryList;
  fillerNav = [{ id: 0, label: 'First' }, { id: 1, label: 'Second' }, { id: 2, label: 'Third' },
  { id: 3, label: 'Pop-up' }];
  private _mediaQueryListener: () => void;
  selected = new FormControl(0);
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    public dialog: MatDialog) {
    this.mediaQuery = media.matchMedia('(max-width: 600px)');
    this._mediaQueryListener = () => changeDetectorRef.detectChanges();
    this.mediaQuery.addListener(this._mediaQueryListener);
    this.selected.setValue(0);
  }
  ngOnInit() {
  }

  toggle(event) {
    if (event.id !== 3) {
      this.selected.setValue(event.id);
    } else {
      this.openPopUp();
    }
  }

  openPopUp() {
    // tslint:disable-next-line: no-use-before-declare
    this.dialog.open(PopUpComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

  ngOnDestroy(): void {
    this.mediaQuery.removeListener(this._mediaQueryListener);
  }

}