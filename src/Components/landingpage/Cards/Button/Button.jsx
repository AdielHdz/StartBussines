import Link from 'next/link';

const Button = ({ text, href, extraClasses = "" }) => {
  return (
    <Link href={href}>
      <button
        className={`hover:bg-primary hover:text-black text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg m-2 text-lg transition-all duration-200 ${extraClasses}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
