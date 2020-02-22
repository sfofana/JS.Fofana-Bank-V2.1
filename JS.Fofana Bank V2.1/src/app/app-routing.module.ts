import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { DepositComponent } from './component/deposit/deposit.component';
import { ApplyComponent } from './component/apply/apply.component';
import { TransferComponent } from './component/transfer/transfer.component';
import { WithdrawComponent } from './component/withdraw/withdraw.component';

const routes: Routes = [
  {path: 'sign',component: SignInComponent}, 
  {path: 'deposit',component: DepositComponent}, 
  {path: 'withdraw',component: WithdrawComponent},
  {path: 'transfer',component: TransferComponent},
  {path: 'apply',component: ApplyComponent},
  //{path: '**',pathMatch: 'full',redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
