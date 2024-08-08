import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";



function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl gap-5 mx-auto flex-col md:flex-row md:items-center">
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-green-500 via-green-300 to-blue-300 rounded-lg text-white">
              Scribble
            </span>
            Spot
          </Link>
          <p className="text-sm mt-5">
            Scribble Sopt Join a World of Writers and Readers
          </p>
        </div>

        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value='Your username'/>
              <TextInput 
                type="text"
                placeholder="Username"
                id="username"
              />
            </div>
            <div className="">
              <Label value='Your Email'/>
              <TextInput 
                type="text"
                placeholder="Email"
                id="email"
              />
            </div>
            <div className="">
              <Label value='Your Password'/>
              <TextInput 
                type="text"
                placeholder="Password"
                id="password"
              />
            </div>

            <Button gradientDuoTone='purpleToPink' type="submit"> 
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5 ">
            <span>Have an Account</span>
            <Link to='/sign-in' className="text-blue-500" >
                Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
