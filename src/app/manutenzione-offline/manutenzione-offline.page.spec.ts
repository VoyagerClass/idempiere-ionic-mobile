import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManutenzioneOfflinePage } from './manutenzione-offline.page';

describe('ManutenzioneOfflinePage', () => {
  let component: ManutenzioneOfflinePage;
  let fixture: ComponentFixture<ManutenzioneOfflinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutenzioneOfflinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManutenzioneOfflinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
