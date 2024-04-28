import { UseFormRegisterReturn } from 'react-hook-form';

interface TextAreaProps {
  label?: string;
  name?: string;
  register: UseFormRegisterReturn;
  [key: string]: any;
}

export default function TextArea({
  label,
  name,
  register,
  ...rest
}: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className='mb-2 block text-base font-medium text-blue-200'
        >
          {label}
        </label>
      ) : null}
      <textarea
        {...register}
        id={name}
        className='resize-none px-3 py-2 text-blue-500 mt-1 w-full rounded-md border border-blue-200 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
        rows={6}
        {...rest}
      />
    </div>
  );
}
