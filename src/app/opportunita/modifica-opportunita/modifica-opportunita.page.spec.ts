import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificaOpportunitaPage } from './modifica-opportunita.page';

describe('ModificaOpportunitaPage', () => {
  let component: ModificaOpportunitaPage;
  let fixture: ComponentFixture<ModificaOpportunitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaOpportunitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificaOpportunitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
