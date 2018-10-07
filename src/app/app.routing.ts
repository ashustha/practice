import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenTshirtComponent } from './men-tshirt/men-tshirt.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { WomenWearComponent } from './women-wear/women-wear.component';


export const router: Routes = [

    { path: '', component: HomeComponent },
    { path: 'menTshirt', component: MenTshirtComponent },
    { path: 'detail', component: ProductDetailComponent },
    { path: 'accessories', component: AccessoriesComponent },
    { path: 'womenWear', component: WomenWearComponent },

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});