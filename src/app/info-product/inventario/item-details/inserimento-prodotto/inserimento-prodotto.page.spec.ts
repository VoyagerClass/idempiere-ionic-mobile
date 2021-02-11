import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InserimentoProdottoPage } from './inserimento-prodotto.page';

describe('InserimentoProdottoPage', () => {
  let component: InserimentoProdottoPage;
  let fixture: ComponentFixture<InserimentoProdottoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserimentoProdottoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InserimentoProdottoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
