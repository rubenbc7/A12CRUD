import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CRUDRoutingModule {}