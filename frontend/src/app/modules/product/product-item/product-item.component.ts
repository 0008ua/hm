import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SharedService } from 'src/app/services/shared.service';
import { MediaObserver } from '@angular/flex-layout';
import { PictureTypes, IPictureState, IUser } from '../../../interfaces';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { ScreenState } from 'src/app/reducers/screen.reducer';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})


export class ProductItemComponent implements OnInit {
  @Input() product: any;
  @Input() loading: boolean;

  environment = environment;
  productPicture: IPictureState;
  user: IUser;

  constructor(
    public media: MediaObserver,
    private userService: UserService,
    private store: Store<State>,
    private router: Router,

  ) { }

  ngOnInit() {

    this.store.select('screen')
      .subscribe((store: ScreenState) => {
        this.productPicture = store.pictureLink[PictureTypes.ProductPicture];
      });
  }

  edit() {
    this.router.navigate(['/', 'dashboard', 'product-form'], { queryParams: { _id: this.product._id } });
  }

  allowTo(permittedRole: string) {
    return this.userService.allowTo(permittedRole);
  }

}
