import { UIState } from "@app/state/ui";
import * as router from '@ngrx/router-store';
import { ShopState } from "app/shop/typings/shop.state";
import { AuthState } from "app/auth/typings/auth.state";
import { LoginPageState } from "app/auth/typings/loginpage.state";

export interface AppState {
    router: router.RouterState;
    ui: UIState;
    auth: AuthState;
    loginPage: LoginPageState;
    shop: ShopState
}