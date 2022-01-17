import {reducer} from "./reducer";

test('collapsed should be true', () => {

    const state: boolean = false
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'});

    expect(newState).toBe(true)
})

test('fake should be true', () => {
    const state: boolean = false
    const newBooleanTrue = reducer(state, {type: 'FAKE'})

    expect(newBooleanTrue).toBe(true)
})