import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { HelloComponent } from './hello.component';
import { ButtonComponent } from './button/button.component';
import { EntryDataComponent } from './button/entry-data.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [ CommonModule, BrowserModule, FormsModule],
  declarations: [HelloComponent, ButtonComponent, EntryDataComponent],
  bootstrap: [ HelloComponent, ButtonComponent, EntryDataComponent],
})

export class AppModule { }