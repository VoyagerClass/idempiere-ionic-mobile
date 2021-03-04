import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuovaTaskPage } from './nuova-task.page';

describe('NuovaTaskPage', () => {
  let component: NuovaTaskPage;
  let fixture: ComponentFixture<NuovaTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovaTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuovaTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
