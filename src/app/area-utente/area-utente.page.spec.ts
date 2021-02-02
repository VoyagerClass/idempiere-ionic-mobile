import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AreaUtentePage } from './area-utente.page';

describe('AreaUtentePage', () => {
  let component: AreaUtentePage;
  let fixture: ComponentFixture<AreaUtentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaUtentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AreaUtentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
