import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OreCompletatePage } from './ore-completate.page';

describe('OreCompletatePage', () => {
  let component: OreCompletatePage;
  let fixture: ComponentFixture<OreCompletatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OreCompletatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OreCompletatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
