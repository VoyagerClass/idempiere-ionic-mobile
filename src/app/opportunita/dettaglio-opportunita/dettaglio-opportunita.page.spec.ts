import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DettaglioOpportunitaPage } from './dettaglio-opportunita.page';

describe('DettaglioOpportunitaPage', () => {
  let component: DettaglioOpportunitaPage;
  let fixture: ComponentFixture<DettaglioOpportunitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioOpportunitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DettaglioOpportunitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
