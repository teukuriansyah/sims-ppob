import axios from "axios"

const api = axios.create({
  baseURL:import.meta.env.VITE_ENDPOINT
})

const service = {
  userLogin:(dataBody) => {
    const data = api.post("/login",dataBody)
    return data
  },
  userRegister:(dataBody) => {
    const data = api.post("/register",dataBody)
    return data
  },
  getProfile:(token) => {
    const data = api.get("/profile",{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    return data
  },
  updateProfile:(token,dataBody) => {
    const { data } = api.put("/profile/update",dataBody,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    return data
  },
  updateImage:(token,dataBody) => {
    const { data } = api.put("/profile/image",dataBody,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    return data
  },
  getBanner:(token) => {
    const { data } = api.get("/banner")
    return data
  },
  getService:(token) => {
    const { data } = api.get("/services",{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    return data
  },
  getBalance:(token) => {
    const { data } = api.post("/services",{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    return data
  },
  postTopup:(token,dataBody) => {
    const data = api.post("/topup",dataBody,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    return data
  },
  postTransaction:(token,dataBody) => {
    const { data } = api.post("/transaction",dataBody,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    return data
  },
  getTransactionHistory:(token) => {
    const { data } = api.post("/transaction/history",{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    return data
  },
}

export default service