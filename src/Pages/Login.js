import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Components/Buttons'


const Login = () => {

return (
    <div className='container'>
        <div className='wrapper row text-center mt-5 mb-3'>
            <div className='login_card mt-5'>
                <h1 className='text-blue mt-5'>Login</h1>
                <section>
                    <form>
                        <div className='row'>
                            <div className='form-group'>
                                <input
                                    type= "email"
                                    className='form-control mx-auto'
                                    placeholder='Enter your email'
                                    required
                                />
                            </div>
                            <div className='form-group mt-3'>
                                <input
                                    type= "password"
                                    className='form-control mx-auto'
                                    placeholder='Enter your password'
                                    required
                                />
                            </div>
                            <div className='login_no_account mt-2'>Forgot password? <Link to='/password-reset'>Click here</Link></div>
                        </div>
                        <div className='mx-auto mt-3'>
                            <Button title='Log in' bgColor="#F2E14F"/>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Login