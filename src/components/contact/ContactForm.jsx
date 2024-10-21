import React, { useState } from 'react';
import { useForm, Controller, set } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { submitContact } from '@/app/action';
import toast, { Toaster } from 'react-hot-toast';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
    const { control, register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            await submitContact(data);
            console.log('Form submitted successfully');
            toast.success('Message sent successfully!');
            setLoading(false);

            reset();
        } catch (error) {
            console.error('An error occurred', error);
            toast.error('Failed to sent message!');
            setLoading(false);
        }
    };
    const inputStyle = `w-full px-4 py-3 border rounded-lg transition-colors  text-black outline-none font-outfit text-sm`;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className='relative'>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        {...register('name')}
                        className={`${inputStyle} 'border-gray-300'}`}
                    />
                    <div className='absolute mr-2'>
                        {errors.name && <p className="text-red-500 text-xs ml-2">{errors.name.message}</p>}
                    </div>
                </div>

                <div className='relative'>
                    <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <PhoneInput
                                country={'in'}
                                value={value || ''}
                                onChange={onChange}
                                countryCodeEditable={true}
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    className: `${inputStyle}'border-gray-300 pl-10 text-black'}`,
                                }}
                                containerStyle={{ width: '100%' ,color: 'black' }}
                                buttonStyle={{ borderTopLeftRadius: '0.5rem', borderBottomLeftRadius: '0.5rem' }}
                            />
                        )}
                    />
                    <div className='absolute '>
                        {errors.phoneNumber && <p className="text-red-500 text-xs ml-2">{errors.phoneNumber.message}</p>}
                    </div>
                </div>
            </div>

            <div className='relative'>
                <input
                    type="email"
                    placeholder="Enter your email"
                    {...register('email')}
                    className={`${inputStyle}border-gray-300`}
                />
                <div className="absolute">
                    {errors.email && <p className="text-red-500 text-xs ml-2">{errors.email.message}</p>}
                </div>
            </div>

            <div className='relative'>
                <textarea
                    placeholder="How can we help?"
                    rows={4}
                    {...register('message')}
                    className={`${inputStyle}border-gray-300`}
                ></textarea>
                <div className="absolute">
                    {errors.message && <p className="text-red-500 text-xs ml-2">{errors.message.message}</p>}
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center font-outfit text-sm"
            >
                {loading ? 'Submitting...' : 'Contact Us Today'}
                <span className="ml-2">➡️</span>
            </button>

            {/* {submitStatus === 'success' && (
                <div className="text-green-600 font-semibold">Form submitted successfully!</div>
            )}
            {submitStatus === 'error' && (
                <div className="text-red-600 font-semibold">An error occurred. Please try again.</div>
            )} */}
            
        </form>
    );
};

export default ContactForm;