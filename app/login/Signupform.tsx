import React, { useState, ChangeEvent, FormEvent } from "react";
import Error from "./Error";

interface Props {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  onlogin: (user: any) => void;
}

interface FormData {
  username: string;
  password: string;
  password_confirmation: string;
  profile_image: string;
}

function Signupform({ setShowLogin, onlogin }: Props) {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    password_confirmation: "",
    profile_image: "",
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  //update form data
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  //Handle form submit
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://[::1]:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json().then((user) => {
          if (typeof onlogin === "function") {
            onlogin(user);
          }
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
    setFormData({
      username: "",
      password: "",
      password_confirmation: "",
      profile_image: "",
    });
  }

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">Logo</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 undefined">
                username
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={handleChange}
                  value={formData.username}
                  type="text"
                  name="username"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined">
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={handleChange}
                  value={formData.password}
                  type="password"
                  name="password"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined">
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={handleChange}
                  value={formData.password_confirmation}
                  type="password"
                  name="password_confirmation"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="profile_image"
                className="block text-sm font-medium text-gray-700 undefined">
                Profile_image
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={handleChange}
                  value={formData.profile_image}
                  type="file"
                  name="profile_image"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4 text-grey-600">
              <button
                value={isLoading ? "Signing up..." : "Sign up"}
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Register
              </button>
              <div className="mt-4 text-grey-600">
                Already have an account?{" "}
                <span>
                  <a
                    className="text-purple-600 hover:underline"
                    href="#"
                    onClick={() => setShowLogin(true)}>
                    Log in
                  </a>
                </span>
              </div>
            </div>
          </form>
          {errors.map((error) => {
            return <Error key={error} error={error} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Signupform;
