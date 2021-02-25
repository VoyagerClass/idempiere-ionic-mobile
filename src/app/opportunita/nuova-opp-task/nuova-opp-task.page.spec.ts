import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuovaOppTaskPage } from './nuova-opp-task.page';

describe('NuovaOppTaskPage', () => {
  let component: NuovaOppTaskPage;
  let fixture: ComponentFixture<NuovaOppTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovaOppTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuovaOppTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
