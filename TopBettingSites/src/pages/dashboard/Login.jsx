import React from 'react'
import { FaUser, FaLock} from 'react-icons/fa';
import { LuEyeClosed } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa6";
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { Api } from '../../constant/api';
import axios from "axios";
import { login } from '../../redux/authSlice';



const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userName , setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loading , setLoading]= useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        const requestData = {
            username: userName,
            password: password
        };
    
        try {
            const response = await axios.post(Api.POST.LOGIN, requestData);
    
            // قراءة البيانات من الرد
            const { access, refresh, username, is_staff } = response.data;
    
            // حفظ في localStorage
            localStorage.setItem("accessToken", access);
            localStorage.setItem("refreshToken", refresh);
            localStorage.setItem("username", username);
            localStorage.setItem("isStaff", is_staff);
    
            // إرسال البيانات إلى Redux (إن وجد)
            dispatch(login({
                access,
                refresh,
                username,
                isStaff: is_staff
            }));
    
            // التوجيه للصفحة الرئيسية
            navigate('/dashboard/home');
    
        } catch (error) {
            console.error("Login failed");
            navigate('/error');
        } finally {
            setLoading(false);
        }
    };
    
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

  return (
    <div className="flex flex-col items-center justify-center mt-20 ">
        <div className="md:pt-12 flex flex-col mb-7 container-form items-center border-4 border-[#00FF88] rounded-md ">
            <p className="text-center font-normal text-3xl text-[#241E1E] m-4 ">اهلا بك في لوحة التحكم</p>
            <form className="max-w-[200px] w-full">
                <div className="flex flex-col mb-10 w-full">
                    <label className="font-semibold  text-2xl inter text-black">
                        اسم المستخدم
                    </label>
                    <div className="relative">
                        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2">
                            <FaUser />
                        </span>
                        <input
                            type="text"
                            className="w-full border-0 border-b-2 pb-5 border-black mt-4 focus:outline-none focus:border-[#8B5715] pl-8"
                            placeholder=" | demo@email.com | "
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold text-2xl inter text-black">كلمة السر</label>
                        <div className="relative flex items-center">
                            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2">
                                <FaLock /> 
                            </span>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                className="border-0 w-full border-b-2 border-black mt-4 pb-5 focus:outline-none focus:border-b-2 focus:border-[#8B5715] pl-8 "
                                placeholder=" | ********* "
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                            <span
                                className="absolute right-0  top-1/2 transform -translate-y-1/2 cursor-pointer  p-2"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? <FaRegEye />: <LuEyeClosed />} 
                            </span>
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className="bg-[#00FF88] text-[#101B2D] border-0 px-12 py-1 font-semibold text-base rounded-md cursor-pointer my-5 mx-auto block transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white" 
                        onClick={handleSubmit}
                    >{
                        loading?("......."):("سجل دخول")
                    }
                    </button>
                </div>
            </form>
        </div>
    </div>

  )
}

export default Login