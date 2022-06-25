import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface projectState {
	UserLogin: boolean
}

const initialState: projectState = {
	UserLogin: false,
}

export const ProjectSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		// userLogin: (state: { UserLogin: boolean }) => {
		// 	state.UserLogin = true
		// },
		userLogin: (
			state: { UserLogin: boolean },
			action: PayloadAction<boolean>
		) => {
			state.UserLogin = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { userLogin } = ProjectSlice.actions

export default ProjectSlice.reducer
