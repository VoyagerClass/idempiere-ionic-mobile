import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttivitaPage } from './attivita.page';

describe('AttivitaPage', () => {
  let component: AttivitaPage;
  let fixture: ComponentFixture<AttivitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttivitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttivitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
