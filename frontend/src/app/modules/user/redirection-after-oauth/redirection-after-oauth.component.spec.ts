import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RedirectionAfterOauthComponent } from './redirection-after-oauth.component';

describe('RedirAfterOauthComponent', () => {
  let component: RedirectionAfterOauthComponent;
  let fixture: ComponentFixture<RedirectionAfterOauthComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectionAfterOauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectionAfterOauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
