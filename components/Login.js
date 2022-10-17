import {supabase} from '../services/supabaseClient';
import Loading from './Loading';
import {useEffect, useState } from 'react';

const style = {
    wrapper: 'flex min-h-screen flex-col items-center justify-center space-y-2',
    loginBtn: 'group flex items-center space-x-4 rounded border-gray-300 border p-4 hover:bg-white',
    loginBtnText: 'font-bold group-hover:text-black'
}

const Login = () => {

    const signInWithGoogle = async () => {
        try {
         await supabase.auth.signIn({
                provider: 'google'
         })
        } catch(error){
            console.log(error)
        }
    }
    return (
        <div className={style.wrapper}>
            <img src='https://miro.medium.com/max/640/1*BD8BMo-OpMehN0RWNFbsoQ.png' className='h-52' />
            <button onClick={signInWithGoogle} className={style.loginBtn}>
            <img src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png' className='h-6 w-6' />
            <span className={style.loginBtnText}>Sign In with Google</span>
            </button>
        </div>
    )
}

export default Login;