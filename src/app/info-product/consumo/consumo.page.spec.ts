import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsumoPage } from './consumo.page';

describe('ConsumoPage', () => {
  let component: ConsumoPage;
  let fixture: ComponentFixture<ConsumoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsumoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
