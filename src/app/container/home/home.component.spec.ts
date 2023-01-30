import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CooperatedApi } from 'src/app/core/api/cooperated.api';
import { CoreModule } from 'src/app/core/core.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () =>
{
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let cooperatedApi: CooperatedApi;

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                CoreModule
            ],
            declarations: [ HomeComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe("formCpf", () =>
    {
        it("should return a FormGroup with one FormControl", () =>
        {
            expect(component.formCpf).toEqual(jasmine.any(FormGroup));
            expect(component.formCpf.get("cpf")).toEqual(jasmine.any(FormControl));
        });
    });

    describe("stepper", () =>
    {
        it("should return a 4 elements array", () =>
        {
            expect(component.stepper.length).toEqual(4);
        });
    });
});
