import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from 'src/app/shared/models';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(): void {
    this.product$ = this.storeService
      .getProductDetails(this.route.snapshot.params.id)
      .pipe(
        catchError(() => {
          this.snackBar
            .open("Ooops. We couldn't get the product details.", 'Try again')
            .onAction()
            .subscribe(() => this.getProductDetails());
          return EMPTY;
        })
      );
  }
}
