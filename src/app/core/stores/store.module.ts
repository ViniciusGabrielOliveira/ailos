import { NgModule } from '@angular/core';
import { StoreModule as NGStoreModule } from '@ngrx/store';
import { storeTools } from '../../../environments/environment';
import { reducers } from './store';

@NgModule({
    imports: [
        NGStoreModule.forRoot(reducers),
        ...storeTools
    ]
})
export class StoreModule
{ }
