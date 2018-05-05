import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { appRouterModule } from './router.module';
import { CoinService } from './coin.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ CoinService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
