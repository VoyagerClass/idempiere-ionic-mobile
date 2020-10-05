import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VenditaPage } from './vendita.page';

describe('VenditaPage', () => {
  let component: VenditaPage;
  let fixture: ComponentFixture<VenditaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenditaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VenditaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
