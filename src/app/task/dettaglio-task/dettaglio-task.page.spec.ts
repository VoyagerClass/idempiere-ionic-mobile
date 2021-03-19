import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DettaglioTaskPage } from './dettaglio-task.page';

describe('DettaglioTaskPage', () => {
  let component: DettaglioTaskPage;
  let fixture: ComponentFixture<DettaglioTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DettaglioTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
