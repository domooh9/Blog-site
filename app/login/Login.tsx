import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Error from "./Error";

interface IFormData {
  username: string;
  password: string;
}

interface IError {
  errors: string[];
}

interface ILoginProps {
  onlogin: (user: any) => void;
  setShowLogin: (showLogin: boolean) => void;
}

function Login({ onlogin, setShowLogin }: ILoginProps) {
  const [formData, setFormData] = useState<IFormData>({
    username: "",
    password: "",
  });
  const router = useRouter();
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://[::1]:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          res.json().then((user) => {
            if (typeof onlogin === "function") {
              onlogin(user);
            }
            router.push("/"); // add this line to redirect to /home
          });
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setFormData({
      username: "",
      password: "",
    });
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-gray px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    value={formData.username}
                    id="username"
                    name="username"
                    type="username"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    value={formData.password}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  value={isLoading ? "Logging in..." : "Login"}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Sign in
                </button>
              </div>
            </form>
            {errors.map((error) => {
              return <Error key={error} error={error} />;
            })}
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                No account yet?
              </span>
              <div className="text-sm">
                <a
                  onClick={() => setShowLogin(false)}
                  href="#"
                  className="font-medium text-blue-500 hover:text-green-700">
                  create account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
