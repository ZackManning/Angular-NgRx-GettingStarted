import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum UserActionTypes {
    MaskUserName = '[User] MaskUserName'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class MaskUserName implements Action {
    readonly type = UserActionTypes.MaskUserName;

    constructor(public payload: boolean) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type UserActions
    = MaskUserName;
