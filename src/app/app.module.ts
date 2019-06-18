import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { ResourcesComponent } from './resources/resources.component';
import { ResourcesEffects } from './resources/resources.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { PowerplantComponent } from './powerplant/powerplant.component';
import { EventComponent } from './event/event.component';
import { OfficeComponent } from './office/office.component';
import { ProductionComponent } from './production/production.component';
import { PowerplantCardComponent } from './powerplant/powerplant-card/powerplant-card.component';
import { ProductionCardComponent } from './production/production-card/production-card.component';
import { OfficeCardComponent } from './office/office-card/office-card.component';
import { EventEffects } from './event/event.effects';
import { OfficeEffects } from './office/office.effects';
import { PowerplantEffects } from './powerplant/powerplant.effects';
import { ProductionEffects } from './production/production.effects';


@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    PowerplantComponent,
    EventComponent,
    OfficeComponent,
    ProductionComponent,
    PowerplantCardComponent,
    ProductionCardComponent,
    OfficeCardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    EffectsModule.forFeature([ResourcesEffects, EventEffects, OfficeEffects, PowerplantEffects, ProductionEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
