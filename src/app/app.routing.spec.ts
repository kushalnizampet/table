import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { AppComponent } from "./app.component"
import { Router } from "@angular/router";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { routes } from "./app-routing.module";
import { Location } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('routing',()=>{
    let component: AppComponent;
    let fixture:ComponentFixture<AppComponent>

    let router: Router;
    let location: Location

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[AppComponent],
            imports:[HttpClientTestingModule,
                RouterTestingModule.withRoutes(routes),
                MatDialogModule,
                MatToolbarModule,
                MatFormFieldModule,
                MatPaginatorModule,
                MatTableModule,
                MatFormFieldModule,
                MatInputModule,
                BrowserAnimationsModule
            ]
        })
    })

    beforeEach(()=>{
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance
        fixture.detectChanges()
        router = TestBed.inject(Router);
        location = TestBed.inject(Location)
    })

    it('Default Route',fakeAsync(()=>{ //Async is used for http calls or u can use async
        fixture.detectChanges()
        router.navigate(['']);
        tick();
        expect(location.path()).toEqual('/')
    }));
})