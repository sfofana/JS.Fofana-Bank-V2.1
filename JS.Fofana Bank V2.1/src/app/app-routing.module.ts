import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositComponent } from './components/deposit/deposit.component';
import { ApplyComponent } from './components/apply/apply.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { ClientComponent } from './components/client/client.component';

const routes: Routes = [ 
  {path: 'client',component: ClientComponent},
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
