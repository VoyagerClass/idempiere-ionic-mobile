import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaterialreceiptPage } from './materialreceipt.page';

describe('MaterialreceiptPage', () => {
  let component: MaterialreceiptPage;
  let fixture: ComponentFixture<MaterialreceiptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialreceiptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialreceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
