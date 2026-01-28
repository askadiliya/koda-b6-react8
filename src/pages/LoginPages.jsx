import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">Login</h1>
        </div>

        <form className="space-y-5">
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <label className="flex items-center mt-1 border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-2 py-2 outline-none text-sm"
              />
            </label>
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <label className="flex items-center mt-1 border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                placeholder="********"
                className="w-full px-2 py-2 outline-none text-sm"
              />
            </label>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            <FaSignInAlt />
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Belum punya akun?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Daftar
          </span>
        </p>
      </div>
    </div>
  );
}