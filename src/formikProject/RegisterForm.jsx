import { Formik, useFormik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
const RegisterForm = () => {
    // const validate= (values) => {
    //         let errors = {}
    //         if (!values.name) {

    //             errors.name = "فیلد نام و نام خانوادگی را پر کنید"
    //         }
    //         if (!values.email) {

    //             errors.email = "فیلد ایمیل را پر کنید"
    //         }else if(!emailRegex.test(values.email)){
    //             errors.email="لطفا قالب ایمیل را رعایت کنید"
    //         }
    //         if (!values.password) {

    //             errors.password = "فیلد پسورد را پر کنید"
    //         }
    //         return errors;
    //     }
    const validationSchema = Yup.object({
        name: Yup.string().required("فیلد نام و نام خانوادگی را پر کنید"),
        email: Yup.string().required("فیلد ایمیل را پر کنید").email("لطفا قالب ایمیل را رعایت کنید"),
        password: Yup.string().required("فیلد پسورد را پر کنید").min(8, "حداقل 8 کاراکتر وارد کنید")
    })
    const onSubmit = () => {
        console.log("hello from submit")

    }
    const initialValues = {
        name: '',
        email: '',
        password: ''
    }
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <div className='flex flex-col items-center justify-center w-full h-screen bg-blue-200'>
                <Form className=' pb-2 w-[40%] rounded-2xl flex flex-col justify-center items-center  bg-blue-300' action="">
                    <div className='flex flex-col m-2 w-[70%]'>
                        <label htmlFor="">نام و نام خانوادگی</label>
                        <Field className='p-3 bg-blue-500 rounded-xs' type="text" name='name'

                        />
                        <ErrorMessage name='name' />
                    </div>
                    <div className='flex flex-col m-2 w-[70%]'>
                        <label htmlFor="">ایمیل</label>
                        <Field className='p-3 bg-blue-500 rounded-xs' type="email" name='email'
                        />
                        <ErrorMessage name='email' />

                    </div>
                    <div className='flex flex-col m-2 w-[70%]'>
                        <label htmlFor="">رمز عبور</label>
                        <Field className='p-3 bg-blue-500 rounded-xs' type="password" name='password'
                        />
                        <ErrorMessage name='password'/>
                        
                    </div>
                    <div>
                        <button className='flex items-center justify-center w-20 h-8 text-white bg-green-400 cursor-pointer rounded-xl hover:bg-green-500' type='submit'>ارسال</button>
                    </div>
                </Form>
            </div>
        </Formik>

    );
};

export default RegisterForm;