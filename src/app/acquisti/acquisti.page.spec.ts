import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcquistiPage } from './acquisti.page';

describe('AcquistiPage', () => {
  let component: AcquistiPage;
  let fixture: ComponentFixture<AcquistiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquistiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcquistiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
