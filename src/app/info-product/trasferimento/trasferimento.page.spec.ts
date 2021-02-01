import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrasferimentoPage } from './trasferimento.page';

describe('TrasferimentoPage', () => {
  let component: TrasferimentoPage;
  let fixture: ComponentFixture<TrasferimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasferimentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrasferimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
