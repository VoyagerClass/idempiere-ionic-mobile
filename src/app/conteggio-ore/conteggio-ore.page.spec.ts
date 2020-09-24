import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConteggioOrePage } from './conteggio-ore.page';

describe('ConteggioOrePage', () => {
  let component: ConteggioOrePage;
  let fixture: ComponentFixture<ConteggioOrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteggioOrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConteggioOrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
