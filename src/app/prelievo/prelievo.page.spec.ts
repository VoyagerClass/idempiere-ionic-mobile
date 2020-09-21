import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrelievoPage } from './prelievo.page';

describe('PrelievoPage', () => {
  let component: PrelievoPage;
  let fixture: ComponentFixture<PrelievoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrelievoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrelievoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
