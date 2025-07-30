import React from 'react'
import Input from "../components/Input.tsx"

const User = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 items-center">
        <div className="flex flex-col gap-3">
          <div>gambar</div>
          <h1 className="text-2xl font-bold">Nama user</h1>
        </div>
        <div className="w-2/3">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <Input inputType="email" placeholder="masukkan email anda" name="email"/>
            </div>
            <div className="flex flex-col gap-2">
              <label>Nama Depan</label>
              <Input inputType="text" placeholder="masukkan nama depan anda" name="firstName"/>
            </div>
            <div className="flex flex-col gap-2">
              <label>Nama Belakang</label>
              <Input inputType="text" placeholder="masukkan nama belakang anda" name="lastName"/>
            </div>
            <div>
              <button className="w-full bg-red-600 text-white py-2 rounded">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User