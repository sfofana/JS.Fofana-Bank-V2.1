import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, ChartsModule, WavesModule, ButtonsModule, CardsModule, ModalModule,  TooltipModule, PopoverModule } from 'angular-bootstrap-md'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignOutComponent } from './component/sign-out/sign-out.component';
import { ClientComponent } from './component/client/client.component';
import { DepositComponent } from './component/deposit/deposit.component';
import { WithdrawComponent } from './component/withdraw/withdraw.component';
import { ApplyComponent } from './component/apply/apply.component';
import { TransferComponent } from './component/transfer/transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignOutComponent,
    ClientComponent,
    DepositComponent,
    WithdrawComponent,
    ApplyComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    CardsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
