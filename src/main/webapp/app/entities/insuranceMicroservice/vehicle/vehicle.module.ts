import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaySharedModule } from 'app/shared';
import {
    VehicleComponent,
    VehicleDetailComponent,
    VehicleUpdateComponent,
    VehicleDeletePopupComponent,
    VehicleDeleteDialogComponent,
    vehicleRoute,
    vehiclePopupRoute
} from './';

const ENTITY_STATES = [...vehicleRoute, ...vehiclePopupRoute];

@NgModule({
    imports: [GatewaySharedModule, RouterModule.forChild(ENTITY_STATES)],
    exports: [VehicleComponent],
    declarations: [
        VehicleComponent,
        VehicleDetailComponent,
        VehicleUpdateComponent,
        VehicleDeleteDialogComponent,
        VehicleDeletePopupComponent
    ],
    entryComponents: [VehicleComponent, VehicleUpdateComponent, VehicleDeleteDialogComponent, VehicleDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayVehicleModule {}
