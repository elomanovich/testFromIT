import {reducer} from "./reducer";

test('collapsed should be true', () => {

    const state: boolean = false
    const newState = reducer(state, {type:'TOGGLE-COLLAPSED'});

    expect(newState).toBe(true)
})