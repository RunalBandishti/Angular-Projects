import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [ViewsHomeComponent, StatisticsComponent, ItemListComponent],
  imports: [CommonModule, ViewsRoutingModule, SharedModule],
  exports: [ViewsHomeComponent],
})
export class ViewsModule {}
