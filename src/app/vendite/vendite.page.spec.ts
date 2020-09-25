import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VenditePage } from './vendite.page';

describe('VenditePage', () => {
  let component: VenditePage;
  let fixture: ComponentFixture<VenditePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenditePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VenditePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
