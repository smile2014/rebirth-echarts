import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { DocComponent } from './doc';
import { DocContentComponent } from './doc/doc-content.component';
import { DemoConfigService } from './demo/demo-config.service';
import { ThemeService } from './theme';
import { RebirthEChartsModule } from '../exports';
import { RouterModule } from '@angular/router';
import { RebirthNGModule } from 'rebirth-ng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    JsonpModule,
    RebirthNGModule,
    RebirthEChartsModule
  ],
  declarations: [
    DocComponent,
    DocContentComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    JsonpModule,
    DocComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: DemoConfigService, useClass: DemoConfigService },
        { provide: ThemeService, useClass: ThemeService }
      ]
    };
  }
}
