import { createSlice } from "@reduxjs/toolkit"

export const sliceHero = createSlice({
    name: 'getHero',
    initialState: {
        hero: ''
    },

    reducers: {
        changeTeste(state, { payload }) {
            return {...state, hero: payload}
        },
    }
})

export const { changeTeste } = sliceHero.actions

export const selectHero = (state: { hero: any }) => state.hero

export default sliceHero.reducer