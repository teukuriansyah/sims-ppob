"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProfileData = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    dataProfile: "test",
    balance: 1000
};
var profileSlice = (0, toolkit_1.createSlice)({
    name: 'profile',
    initialState: initialState,
    reducers: {
        setProfileData: function (state, action) {
            state.dataProfile = action.payload.dataProfile || [];
            state.balance = action.payload.balance || 0;
        }
    }
});
exports.setProfileData = profileSlice.actions.setProfileData;
exports.default = profileSlice.reducer;
