import { cls } from '../libs/client/utils';

interface ButtonProps {
  transparentBg?: boolean;
  large?: boolean;
  text: string;
  [key: string]: any;
}

export default function Button({
  transparentBg = false,
  large = false,
  onClick,
  text,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={cls(
        'w-full rounded-md border border-transparent px-4 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        large ? 'py-3 text-base' : 'py-2 text-sm',
        transparentBg
          ? 'text-blue-500 hover:border-blue-600'
          : 'bg-blue-500 text-white hover:bg-blue-600',
      )}
    >
      {text}
    </button>
  );
}
