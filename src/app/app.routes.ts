import { Routes } from '@angular/router';
import { ShowComponent } from './pages/show/show.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CartComponent } from './pages/cart/cart.component';
import { PaymentFormComponent } from './pages/payment-form/payment-form.component';

export const routes: Routes = [

       { path: 'show', component: ShowComponent },
       { path: 'landing', component: LandingComponent },
       { path: 'cart', component: CartComponent },
       { path: 'show', component: ShowComponent },
       { path: 'checkout', component: PaymentFormComponent},
       { path: '', component: LandingComponent },

];
