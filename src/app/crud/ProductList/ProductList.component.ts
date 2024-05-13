import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>ProductList works!</p>`,
  styleUrl: './ProductList.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent { }
