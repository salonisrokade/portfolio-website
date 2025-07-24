import { createSlice } from "@reduxjs/toolkit"
interface goals {
    goalsList: any[]
}
const initialState: goals = {
    goalsList: []
}

export const goalsSlice = createSlice({
    name: 'goals',
    initialState,
    reducers: {
        addGoal: (state,action) => {
            state.goalsList = [...state.goalsList, action.payload]
        },
        updateGoal: (state,action) => {
            state.goalsList[action.payload.index] = action.payload.data
        }
    }
})
export const { addGoal, updateGoal } = goalsSlice.actions
export default goalsSlice.reducer