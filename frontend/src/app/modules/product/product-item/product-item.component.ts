import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SharedService } from 'src/app/services/shared.service';
import { MediaObserver } from '@angular/flex-layout';
import { PictureTypes, ScreenTypes } from '../../../interfaces';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { ScreenState } from 'src/app/reducers/screen.reducer';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})


export class ProductItemComponent implements OnInit {
  @Input() product: any;
  environment = environment;
  productPictureLink: string;
  mainPictureLink: string;

  constructor(
    public media: MediaObserver,
    private sharedService: SharedService,
    private store: Store<State>,
  ) { }


  ngOnInit() {
    this.store.select('screen')
      .subscribe((store: ScreenState) => {
        this.productPictureLink = store[PictureTypes.ProductPicture];
      });

  }


}
