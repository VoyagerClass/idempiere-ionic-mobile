import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompletaInventarioPage } from './completa-inventario.page';

describe('CompletaInventarioPage', () => {
  let component: CompletaInventarioPage;
  let fixture: ComponentFixture<CompletaInventarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletaInventarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompletaInventarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
