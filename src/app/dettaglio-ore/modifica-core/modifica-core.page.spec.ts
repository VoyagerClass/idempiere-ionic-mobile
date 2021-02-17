import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificaCOrePage } from './modifica-core.page';

describe('ModificaCOrePage', () => {
  let component: ModificaCOrePage;
  let fixture: ComponentFixture<ModificaCOrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaCOrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificaCOrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
