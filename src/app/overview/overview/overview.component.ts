import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Product } from 'src/app/shared/models';
import { StoreService } from 'src/app/shared/services/store.service';
import { catchError } from 'rxjs/operators';
import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ transform: 'translateY(-35px)', opacity: 0 }),
            stagger(100, [
              animate(
                '0.3s',
                style({ transform: 'translateY(0)', opacity: 1 })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class OverviewComponent implements OnInit {
  products$: Observable<Product[]>;
  items = [];

  constructor(
    private storeService: StoreService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products$ = this.storeService.getProducts().pipe(
      catchError(() => {
        this.snackBar
          .open("Ooops. We couldn't get the products.", 'Try again')
          .onAction()
          .subscribe(() => this.getProducts());
        return EMPTY;
      })
    );
  }

  navigate(sku: string) {
    this.router.navigate(['products', sku]);
  }
}
