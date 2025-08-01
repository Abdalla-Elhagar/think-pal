'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { signIn } from 'next-auth/react';



export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 ">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden ">
        
        {/* Left Form Section */}
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Log in to ThinkPal</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="you@example.com"
              onChange={handleChange}
              required
            />
            <PasswordInput
              label="Password"
              name="password"
              onChange={handleChange}
              show={showPassword}
              toggle={() => setShowPassword(!showPassword)}
            />

              <Link href="/forget-password" className="text-blue-600 hover:underline text-sm">Forget Password ?</Link>

            <button
              type="submit"
              className="w-full bg-[#fccd05] hover:bg-[#e6b800] text-white font-semibold py-3 px-6 rounded-lg text-lg transition"
            >
              Log In
            </button>
            

            <div className="flex items-center justify-between gap-4 my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="text-gray-500 text-sm">Or continue with</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => signIn('google')}
                className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 w-full text-sm hover:bg-gray-100"
              >
                <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Google" className="w-5 h-5" />
                Google
              </button>
             
              <button
                type="button"
                onClick={() => signIn('facebook')}
                className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 w-full text-sm hover:bg-gray-100"
              >
                <img src="https://img.icons8.com/?size=100&id=13912&format=png&color=000000" alt="Facebook" className="w-5 h-5" />
                Facebook
              </button>
              
            </div>
            <div className="text-center text-sm text-gray-600">
              Don't have account? {' '}
              <Link href="/sign-up" className="text-blue-600 hover:underline">Sign Up</Link>
            </div>
          </form>
        </div>

        {/* Right Welcome Section */}
        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 flex flex-col items-center text-white px-10 py-20">
          <h2 className="text-3xl font-bold mb-4">Welcome to ThinkPal</h2>
          <p className="text-center max-w-sm text-lg">
            Your AI-powered assistant for academic success. Unlock your full potential.
          </p>
  
            <div className="mt-6 bg-yellow-300 w-32 h-32 rounded-full flex items-center justify-center">
            <img
              src="https://img.icons8.com/?size=100&id=E6O68COXCS8N&format=png&color=FFFFFF"
              alt="Ai Brain"
              className=" h-30 object-contain"
            />
          </div>

  
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  name,
  type,
  placeholder,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-gray-700 font-semibold mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fccd05] transition"
      />
    </div>
  );
}

function PasswordInput({
  label,
  name,
  onChange,
  show,
  toggle,
}: {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  show: boolean;
  toggle: () => void;
}) {
  return (
    <div className="flex flex-col relative">
      <label htmlFor={name} className="text-gray-700 font-semibold mb-2">
        {label}
      </label>
      <input
        type={show ? 'text' : 'password'}
        name={name}
        id={name}
        placeholder="••••••••"
        onChange={onChange}
        required
        className="px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fccd05] transition"
      />
      <span
        onClick={toggle}
        className="absolute right-3 top-10 cursor-pointer text-gray-500"
      >
        {show ? <EyeOff size={20} /> : <Eye size={20} />}
      </span>
    </div>
  );
}
