import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCom } from './switch-com';

describe('SwitchCom', () => {
  let component: SwitchCom;
  let fixture: ComponentFixture<SwitchCom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchCom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchCom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
