import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, MatCardModule,MatButtonModule],
  exports: [MatSidenavModule, MatToolbarModule, MatCardModule,MatButtonModule]
})
export class MaterialModule {}
