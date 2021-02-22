import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuovaTestataPage } from './nuova-testata.page';

describe('NuovaTestataPage', () => {
  let component: NuovaTestataPage;
  let fixture: ComponentFixture<NuovaTestataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovaTestataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuovaTestataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
