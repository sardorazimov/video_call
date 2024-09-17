import Image from 'next/image';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Image
        src="/loader.svg"
        alt="Loading..."
        width={250}
        height={250}
        className='text-sky-700'
      />
    </div>
  );
};

export default Loader;