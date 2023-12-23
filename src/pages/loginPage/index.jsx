import React from 'react'
import "./style.css"
const LoginPage = () => {
  return (
    <div className='login-page'>
        <h1>تسجيل الدخول</h1>
        <form>

        <input type='email'  placeholder='الإيميل'/>
        <input type='password' placeholder='كلمة المرور'/>
        <button>تسجيل الدخول</button>
        </form>
        <p>ليس لديك حساب؟ <span className='press-button'>اضغط هنا </span></p>
    </div>
  )
}

export default LoginPage
