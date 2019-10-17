import { NgModule } from '@angular/core';
import { CustomFilterPipe } from './custom-filter.pipe';

@NgModule({
  declarations: [CustomFilterPipe],
  exports: [ CustomFilterPipe ]
})
export class PipesModule { }
