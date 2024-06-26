import Link from 'next/link';
import useUser from '../libs/client/useUser';

const NavBar = () => {
  const { user } = useUser();
  return (
    <div className='fixed min-h-screen w-[60px] flex flex-col items-center border-r-[1px] border-blue-100 px-4 pt-2 space-y-4'>
      <Link href='/'>
        <button className='text-blue-300 hover:text-blue-400'>
          <svg
            className='h-8 w-8'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
          </svg>
        </button>
      </Link>
      <Link href='/tweets/upload'>
        <button className='text-blue-300 hover:text-blue-400'>
          <svg
            className='h-9 w-9'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
            ></path>
          </svg>
        </button>
      </Link>
      <Link href={user ? '/profile' : '/log-in'}>
        <button className='text-blue-300 hover:text-blue-400'>
          <svg
            className='h-9 w-9'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  );
};
export default NavBar;
