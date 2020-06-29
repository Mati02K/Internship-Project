import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LastPage } from './last.page';

describe('LastPage', () => {
  let component: LastPage;
  let fixture: ComponentFixture<LastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
