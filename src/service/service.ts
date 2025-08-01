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
  getProfile:(token:string|null) => {
    const data = api.get("/profile",{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    return data
  },
  updateProfile:(token:string|null,dataBody) => {
    const data = api.put("/profile/update",dataBody,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    return data
  },
  updateImage:(token:string,dataBody) => {
    const { data } = api.put("/profile/image",dataBody,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    return data
  },
  getBanner:() => {
    const data = api.get("/banner")
    return data
  },
  getServices:(token:string|null) => {
    const data = api.get("/services",{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    return data
  },
  getBalance:(token:string|null) => {
    const data = api.get("/balance",{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    return data
  },
  postTopup:(token:string|null,dataBody) => {
    const data = api.post("/topup",dataBody,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    return data
  },
  postTransaction:(token:string|null,dataBody) => {
    const data = api.post("/transaction",dataBody,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    return data
  },
  getTransactionHistory:(token:string) => {
    const { data } = api.post("/transaction/history",{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    })
    return data
  },
}

export default service