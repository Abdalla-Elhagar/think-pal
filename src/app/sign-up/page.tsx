'use client';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    university: '',
    college: '',
    academicLevel: '',
    educationType: '',
    birthDate: '',
    graduationDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Full Name" name="fullName" type="text" onChange={handleChange} required />
          <Input label="Email Address" name="email" type="email" onChange={handleChange} required />

          <Input label="Password" name="password" type="password" onChange={handleChange} required />
          <Input label="Confirm Password" name="confirmPassword" type="password" onChange={handleChange} required />

          <Input label="Place of Residence" name="address" type="text" onChange={handleChange} />
          <Input label="University / School" name="university" type="text" onChange={handleChange} />

          <Input label="College (if applicable)" name="college" type="text" onChange={handleChange} />
          <Input label="Academic Year (e.g., 3rd Year or Graduated)" name="academicLevel" type="text" onChange={handleChange} />

          <Select
            label="Education Type"
            name="educationType"
            options={['Bachelor', 'Diploma', 'Master', 'PhD']}
            onChange={handleChange}
          />
          <Input label="Date of Birth" name="birthDate" type="date" onChange={handleChange} />
          <Input label="Graduation Date" name="graduationDate" type="date" onChange={handleChange} />

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#fccd05] hover:bg-[#fccd05] text-white font-semibold py-3 px-6 rounded-lg text-lg transition"
            >
              Sign Up
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{' '}
              <a href="/login" className="font-medium text-black hover:underline">
                Log in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

function Input({
  label,
  name,
  type,
  onChange,
  required = false
}: {
  label: string;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="flex flex-col relative">
      <label htmlFor={name} className="text-gray-700 font-semibold mb-2">{label}</label>
      <input
        type={isPassword ? (showPassword ? 'text' : 'password') : type}
        name={name}
        id={name}
        onChange={onChange}
        required={required}
        className="px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fccd05] hover:ring-2 hover:ring-[#fccd05] transition duration-200"
      />

      {isPassword && (
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-10 cursor-pointer text-gray-500"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </span>
      )}
    </div>
  );
}


function Select({
  label,
  name,
  options,
  onChange
}: {
  label: string;
  name: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-gray-700 font-semibold mb-2">{label}</label>
      <select
        name={name}
        id={name}
        onChange={onChange}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fccd05] transition"
      >
        <option value="">-- Select --</option>
        {options.map((opt) => (
          <option value={opt} key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
