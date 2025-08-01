import Input from "../components/Input.tsx"
import service from "../service/service.ts"
import Navbar from "../components/Navbar.tsx"

const User = () => {
  const submitUpdate = async(formData) => {
    try{
      const token = localStorage.getItem("token")
      const updateData = {
        first_name:formData.get("firstName"),
        last_name:formData.get("lastName")
      }
      const data = await service.updateProfile(token,updateData)
      console.log(data.data.data)
    }
    catch(err) {
      console.log(err)
    }
  }
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-5 items-center mt-16">
        <div className="flex flex-col gap-3">
          <div>gambar</div>
          <h1 className="text-2xl font-bold">Nama user</h1>
        </div>
        <div className="w-2/3">
          <form className="flex flex-col gap-5" action={submitUpdate}>
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