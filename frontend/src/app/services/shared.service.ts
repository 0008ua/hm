import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PictureTypes, ScreenTypes, ProductScreenTypes, MainScreenTypes } from '../interfaces';
import { environment } from '../../environments/environment';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { map } from 'rxjs/operators';
import { ScreenState } from '../reducers/screen.reducer';

@Injectable({
  providedIn: 'root'
})


export class SharedService {
  environment = environment;
  cloudinaryUrl = environment.cloudinary.cloudHost + '/' + environment.cloudinary.cloudName;

  constructor(
    private http: HttpClient,
    public media: MediaObserver,

  ) { }

  checkPictureFile(file: File): { err: string | null } {
    if (!file) {
      return ({ err: 'Файл не вибрано' });
    } else if (file.size > 26215000) { // 25 * 1024 * 1024
      return ({ err: 'Розмір файлу повинен бути менше 25Мб' });
    } else if (
      file.type !== 'image/jpg' &&
      file.type !== 'image/jpe' &&
      file.type !== 'image/gif' &&
      file.type !== 'image/jpeg' &&
      file.type !== 'image/bmp' &&
      file.type !== 'image/png' &&
      file.type !== 'image/svg+xml' &&
      file.type !== 'image/webp') {
      return ({ err: 'Виберіть інший тип файлу' });
    } else {
      return ({ err: null });
    }
  }

  uploadPicture(file: File, filePrefix: string, eager: any): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('filePrefix', filePrefix);
    formData.append('eager', JSON.stringify(eager));

    return this.http.post<string>(
      'api/shared/upload-picture',
      formData
    );
  }

  createPictureLink(pictureType: PictureTypes, screenType: ScreenTypes) {
    switch (pictureType) {
      case PictureTypes.ProductPicture: {
        return this.cloudinaryUrl + '/' + ProductScreenTypes[screenType];
      }
      case PictureTypes.MainPicture: {
        return this.cloudinaryUrl + '/' + MainScreenTypes[screenType];
      }
      default: {
        return this.cloudinaryUrl;
      }
    }
  }


  pictureLink() {
    return this.media.asObservable()
      .pipe(
        map((_: MediaChange[]) => {
          const screenState = {} as ScreenState;
          for (const pictureType in PictureTypes) {
            if (PictureTypes.hasOwnProperty(pictureType) && !isNaN(Number(pictureType))) {
              if (this.media.isActive(ScreenTypes.xs)) {
                screenState[pictureType] = this.createPictureLink(Number(pictureType), ScreenTypes.xs);
              } else if (this.media.isActive(ScreenTypes.sm)) {
                screenState[pictureType] = this.createPictureLink(Number(pictureType), ScreenTypes.sm);
              } else if (this.media.isActive(ScreenTypes.md)) {
                screenState[pictureType] = this.createPictureLink(Number(pictureType), ScreenTypes.md);
              } else {
                screenState[pictureType] = this.createPictureLink(Number(pictureType), ScreenTypes.xl);
              }
            }
          }
          console.log('screenState', screenState);
          return screenState;
        })
      );
  }

}

