"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var api = axios_1.default.create({
    baseURL: import.meta.env.VITE_ENDPOINT
});
var service = {
    userLogin: function (dataBody) {
        var data = api.post("/login", dataBody);
        return data;
    },
    userRegister: function (dataBody) {
        var data = api.post("/register", dataBody);
        return data;
    },
    getProfile: function (token) {
        var data = api.get("/profile", {
            headers: {
                'Authorization': "Bearer ".concat(token)
            }
        });
        return data;
    },
    updateProfile: function (token, dataBody) {
        var data = api.put("/profile/update", dataBody, {
            headers: {
                'Authorization': "Bearer ".concat(token)
            }
        }).data;
        return data;
    },
    updateImage: function (token, dataBody) {
        var data = api.put("/profile/image", dataBody, {
            headers: {
                'Authorization': "Bearer ".concat(token)
            }
        }).data;
        return data;
    },
    getBanner: function (token) {
        var data = api.get("/banner").data;
        return data;
    },
    getService: function (token) {
        var data = api.get("/services", {
            headers: {
                'Authorization': "Bearer ".concat(token)
            }
        }).data;
        return data;
    },
    getBalance: function (token) {
        var data = api.post("/services", {
            headers: {
                'Authorization': "Bearer ".concat(token)
            }
        }).data;
        return data;
    },
    postTopup: function (token, dataBody) {
        var data = api.post("/topup", dataBody, {
            headers: {
                'Authorization': "Bearer ".concat(token)
            }
        });
        return data;
    },
    postTransaction: function (token, dataBody) {
        var data = api.post("/transaction", dataBody, {
            headers: {
                'Authorization': "Bearer ".concat(token)
            }
        }).data;
        return data;
    },
    getTransactionHistory: function (token) {
        var data = api.post("/transaction/history", {
            headers: {
                'Authorization': "Bearer ".concat(token)
            }
        }).data;
        return data;
    },
};
exports.default = service;
