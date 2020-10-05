import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContabilitaPage } from './contabilita.page';

describe('ContabilitaPage', () => {
  let component: ContabilitaPage;
  let fixture: ComponentFixture<ContabilitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContabilitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContabilitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
