import { PessoasService } from './pessoas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    // já inclui CommonModule internamente
    AppRoutingModule
  ],
  providers: [
    // PessoasService aqui só se não usar @Injectable({ providedIn: 'root' }) no serviço
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
