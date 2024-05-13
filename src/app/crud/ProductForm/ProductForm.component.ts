import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>ProductForm works!</p>`,
  styleUrl: './ProductForm.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent { }
