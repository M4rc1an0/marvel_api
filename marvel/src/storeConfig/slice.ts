import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
    name: 'personSearch',
    initialState: {
        person: '0'
    },

    reducers: {
        change(state, { payload }) {
            return {...state, person: payload}
        },
    }
})

export const { change } = slice.actions

export const selectPerson = (state: { person: any }) => state.person

export default slice.reducer