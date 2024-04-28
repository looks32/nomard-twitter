import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  label: string;
  name: string;
  kind?: 'email' | 'username' | 'password';
  type: string;
  register: UseFormRegisterReturn;
  required: boolean;
}

export default function Input({
  label,
  name,
  kind,
  type,
  register,
  required,
}: InputProps) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <label
        className='mb-2 block text-base font-medium text-blue-200'
        htmlFor={name}
      >
        {label}
      </label>
      {kind === 'email' ? (
        <div className='flex items-center rounded-md'>
          <input
            type={type}
            id={name}
            required={required}
            {...register}
            className='text-blue-500 w-full appearance-none rounded-md border border-blue-200 px-3 py-2 
            focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          />
        </div>
      ) : null}
      {kind === 'username' ? (
        <div className='flex items-center rounded-md'>
          <input
            type={type}
            id={name}
            required={required}
            {...register}
            className='text-blue-500 w-full appearance-none rounded-md border border-blue-200 px-3 py-2 
            focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          />
        </div>
      ) : null}
      {kind === 'password' ? (
        <div className='relative'>
          <input
            type={show ? 'text' : 'password'}
            id={name}
            required={required}
            {...register}
            className='text-blue-500 w-full appearance-none rounded-md border border-blue-200 px-3 py-2 
            focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          />
        </div>
      ) : null}
    </div>
  );
}
