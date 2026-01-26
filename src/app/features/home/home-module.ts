import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing-module';
import { AppTranslateModule } from '../shared/app-translate-module';
import { SharedModule } from '../shared/shared-module';
import { Home } from './components/home/home';

const imports = [CommonModule, HomeRoutingModule, SharedModule];
const exports = [Home];
@NgModule({
  declarations: [Home],
  imports: [AppTranslateModule.forChild('home'), ...imports],
  exports: [...imports, ...exports],
})
export class HomeModule {}
