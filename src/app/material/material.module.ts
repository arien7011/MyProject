import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule, } from '@angular/material/card';
const MaterialComponents= [
  MatSliderModule
]

@NgModule({

  imports: [
    MatSliderModule,MatCardModule
  ],
  exports: [
    MatSliderModule
  ]
})
export class MaterialModule { }
