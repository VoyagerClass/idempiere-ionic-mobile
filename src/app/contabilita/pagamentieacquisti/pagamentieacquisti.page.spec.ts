import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagamentieacquistiPage } from './pagamentieacquisti.page';

describe('PagamentieacquistiPage', () => {
  let component: PagamentieacquistiPage;
  let fixture: ComponentFixture<PagamentieacquistiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentieacquistiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagamentieacquistiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
