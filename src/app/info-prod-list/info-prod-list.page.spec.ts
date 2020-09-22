import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoProdListPage } from './info-prod-list.page';

describe('InfoProdListPage', () => {
  let component: InfoProdListPage;
  let fixture: ComponentFixture<InfoProdListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoProdListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoProdListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
