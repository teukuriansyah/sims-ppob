"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var profileSlice_ts_1 = require("./slice/profileSlice.ts");
var store = (0, toolkit_1.configureStore)({
    reducer: {
        profile: profileSlice_ts_1.default,
    },
});
exports.default = store;
