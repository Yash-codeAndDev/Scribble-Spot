
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function Signin() {

  const [formData, setFormData] = useState({})
  const[errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value.trim()})
    // console.log(formData)

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!formData.email || !formData.password){
      return setErrorMessage('Please Fill all Fields')
    }
    try{
      setLoading(true)
      setErrorMessage(null)
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers : {'Content-Type' : 'application/json'},
        body: JSON.stringify(formData)
      });
      const data = await res.json()

      if(data.success === false){
        return setErrorMessage(data.message)
      }
      setLoading(false)
      if(res.ok){
        navigate('/')
      }

    }catch(error){
      setErrorMessage(error.message)
      setLoading(false)
    }
  }



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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="">
              <Label value='Your Email'/>
              <TextInput 
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value='Your Password'/>
              <TextInput 
                type="password"
                placeholder="*******"
                id="password"
                onChange={handleChange}
              />
            </div>

            <Button gradientDuoTone='purpleToPink' type="submit" > 
              {
                loading ? (
                  <>
                  <Spinner size='sm' />
                  <span className="pl-3">Loading...</span>
                  </>
                  ) : 'Sign In'
              }
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5 ">
            <span>Dont have an Account</span>
            <Link to='/sign-up' className="text-blue-500" >
                Sign Up
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-5" color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Signin;
