import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DettaglioOrePage } from './dettaglio-ore.page';

describe('DettaglioOrePage', () => {
  let component: DettaglioOrePage;
  let fixture: ComponentFixture<DettaglioOrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioOrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DettaglioOrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
