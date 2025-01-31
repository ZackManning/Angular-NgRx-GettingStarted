import { Action } from '@ngrx/store';
import { Product } from '../product';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ProductActionTypes {
    ToggleProductCode = '[Product] ToggleProductCode',
    SetCurrentProduct = '[Product] SetCurrentProduct',
    ClearCurrentProduct = '[Product] ClearCurrentProduct',
    InitializeCurrentProduct = '[Product] InitializeCurrentProduct',
    Load = '[Product] Load',
    LoadSuccess = '[Product] LoadSuccess',
    LoadFail = '[Product] LoadFail',
}

export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode;

    constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct;

    constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct;
}

export class InitializeCurrentProduct implements Action {
    readonly type = ProductActionTypes.InitializeCurrentProduct;
}

export class Load implements Action {
    readonly type = ProductActionTypes.Load;
}
export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LoadSuccess;

    constructor(public payload: Product[]) { }
}
export class LoadFail implements Action {
    readonly type = ProductActionTypes.LoadFail;

    constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ProductActions =
    ToggleProductCode
    | ClearCurrentProduct
    | SetCurrentProduct
    | InitializeCurrentProduct
    | Load
    | LoadSuccess
    | LoadFail;
