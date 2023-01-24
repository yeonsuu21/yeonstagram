import firebaseApp from '@config/firebaseApp';
import React, { useState } from 'react';
import { useCallback } from 'react';
import './css/index.css';

const Fauth = firebaseApp.auth();

function Login() {

    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const __dologin = useCallback[

        () => {
            Fauth.signInWithEmailandPassword(email,password).then
            (Credential => {
                const {user} = Credential
                console.log(user);
            }).catch(err => {
                console.log(err);
            })
        },
        [email,password]
    ]
  return (
    <div className='login'>
    <div className='wrapper'>
        <div className='logo'>
            <img src='/assets/welcome/logo.svg'></img>
        </div>
        <form className='login-contents' onSubmit={__dologin}>
            <div className='email-inp custom-inp'>
                <div className='title txt-bold'>이메일</div>
                <div className='inp'>
                    <input type='email' placeholder='이메일을 입력해주세요'
                    onBlur={(e) => setEmail(e.target.value)} required/>
                </div>
            </div>
            <div className='password-inp custom-inp'>
            <div className='title txt-bold'>비밀번호</div>
            <div className='inp'>
                    <input type='password'  placeholder='비밀번호를 입력해주세요'
                    onBlur={(e) => setPassword(e.target.value)} required/>
                </div>
            </div>
            <button className='login-btn' type="submit">로그인 하기</button>
        </form>
        <div className='go-join'>
            <div className='title txt-bold'>또는 회원가입하기</div>
            <div className='asset'>
                <img src='/assets/welcome/arrow.svg'></img>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login
