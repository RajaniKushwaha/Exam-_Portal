import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaShieldAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../API/firebase";

const Login = () => {
  const googlelogin=async()=>{
    try {
      const data=await signInWithPopup(auth,googleProvider)
      const token =await data.user.getIdToken()
      console.log(token)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 lg:flex">
          
          {/* Decorative circles */}
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10" />

          <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20 text-white">

            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <FaGraduationCap className="text-2xl" />
              </div>

              <span className="text-2xl font-bold">
                ExamPortal
              </span>
            </div>

            <h1 className="max-w-lg text-5xl font-extrabold leading-tight">
              Your Exam.
              <br />
              Your Future.
              <br />
              <span className="text-cyan-100">
                Your Success.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-blue-50">
              Access secure online examinations, track your performance,
              and take your academic journey to the next level.
            </p>

            <div className="mt-8 flex items-center gap-3 text-blue-50">
              <FaShieldAlt />
              <span>Secure and trusted examination platform</span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >

            {/* Mobile Logo */}
            <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <FaGraduationCap />
              </div>

              <span className="text-2xl font-bold text-gray-900">
                ExamPortal
              </span>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Welcome Back 👋
              </h2>

              <p className="mt-2 text-gray-600">
                Login to continue to your examination dashboard.
              </p>
            </div>

            {/* Login Card */}
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-blue-100/40">

              <form className="space-y-6">

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="relative">
                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-12 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />

                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <FaEye />
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-2">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />

                  <label
                    htmlFor="remember"
                    className="text-sm text-gray-600"
                  >
                    Remember me
                  </label>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200"
                >
                  Login
                </button>
                <div className="my-6 flex items-center gap-4">
  <div className="h-px flex-1 bg-gray-200"></div>

  <span className="text-sm text-gray-500">
    OR
  </span>

  <div className="h-px flex-1 bg-gray-200"></div>
</div>

<button
  type="button"
  onClick={()=>{googlelogin()}}
  className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50 hover:shadow-md"
>
  <FcGoogle className="text-xl" />
  Continue with Google
</button>
              </form>

              {/* Register */}
              <p className="mt-7 text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Create Account
                </Link>
              </p>
            </div>

            <p className="mt-6 text-center text-xs text-gray-500">
              © 2026 ExamPortal. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;