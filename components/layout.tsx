import { useRouter } from 'next/router';
import { cls } from '../libs/client/utils';
import NavBar from './navbar';

interface LayoutProps {
  title: string;
  canGoBack?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  children,
}: LayoutProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div className='flex min-h-screen'>
      <NavBar />
      <div className='flex-1 pl-[60px]'>
        <div className='px-4 py-2 sticky top-0 z-50 w-full bg-[#f9f9f9] shadow-sm'>
          <div className='flex justify-between items-center'>
            <div>
              {canGoBack ? (
                <button
                  onClick={onClick}
                  className='text-blue-500'
                >
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='3'
                      d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                    ></path>
                  </svg>
                </button>
              ) : null}
              {title ? (
                <span
                  className={cls(
                    'text-3xl text-blue-300 font-bold',
                    canGoBack ? 'pl-4' : '',
                    '',
                  )}
                >
                  {title}
                </span>
              ) : null}
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
