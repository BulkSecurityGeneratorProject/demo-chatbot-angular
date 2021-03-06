import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Driver } from 'app/shared/model/insuranceMicroservice/driver.model';
import { DriverService } from './driver.service';
import { DriverComponent } from './driver.component';
import { DriverDetailComponent } from './driver-detail.component';
import { DriverUpdateComponent } from './driver-update.component';
import { DriverDeletePopupComponent } from './driver-delete-dialog.component';
import { IDriver } from 'app/shared/model/insuranceMicroservice/driver.model';

@Injectable({ providedIn: 'root' })
export class DriverResolve implements Resolve<IDriver> {
    constructor(private service: DriverService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((driver: HttpResponse<Driver>) => driver.body));
        }
        return of(new Driver());
    }
}

export const driverRoute: Routes = [
    {
        path: 'driver',
        component: DriverComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Drivers'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'driver/:id/view',
        component: DriverDetailComponent,
        resolve: {
            driver: DriverResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Drivers'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'driver/new',
        component: DriverUpdateComponent,
        resolve: {
            driver: DriverResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Drivers'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'driver/:id/edit',
        component: DriverUpdateComponent,
        resolve: {
            driver: DriverResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Drivers'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const driverPopupRoute: Routes = [
    {
        path: 'driver/:id/delete',
        component: DriverDeletePopupComponent,
        resolve: {
            driver: DriverResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Drivers'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
