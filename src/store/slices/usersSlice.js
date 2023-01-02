import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, postUser } from "../../utils/api";

export const STATUS_LOADING = "loading";
export const STATUS_IDLE = "idle";

export const loadUsers = createAsyncThunk(
    '@@users/load-all',
    async (nextLink) => {
        return getUsers(nextLink);
    }
);

export const addUser = createAsyncThunk(
    '@@users/add',
    async (formData, api) => {
        const result = await postUser(formData);
        api.dispatch(loadUsers());
        return result;
    }
);

const usersSlice = createSlice({
    name: "@@users",
    initialState: {
        entities: {},
        userAdded: false,
        loading: STATUS_IDLE,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.entities = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                state.loading = STATUS_IDLE;
                state.error = "Error while getting users from server, try again later...";
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.userAdded = action.payload;
                state.entities = { ...state.entities };
            })
            .addCase(addUser.rejected, (state, action) => {
                state.loading = STATUS_IDLE;
                state.error = "Error when adding user to the server, try again later...";
            })
            .addMatcher((action) => action.type.endsWith('/pending'), (state) => {
                state.loading = STATUS_LOADING;
                state.error = null;
            })
            .addMatcher((action) => action.type.endsWith('/fulfilled'), (state) => {
                state.loading = STATUS_IDLE;
            })
    }
});

export const usersSelector = (state) => {
    return state.users;
}

export const userAddedSelector = (state) => {
    return state.users.userAdded;
}

export const usersReducer = usersSlice.reducer;