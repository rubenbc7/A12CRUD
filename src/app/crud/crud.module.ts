import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CRUDRoutingModule } from "./crud-routing.module";
import { ProductListComponent } from "./ProductList/ProductList.component";
import { ProductFormComponent } from "./ProductForm/ProductForm.component";


@NgModule({
    declarations: [
        ProductListComponent,
        ProductFormComponent
    ],
    imports: [
        CommonModule,
        CRUDRoutingModule
    ]
})
export class CRUDModule{}