import Image from 'next/image';
import notFoundImage from '../../public/image/oops-404-error.webp'
import Link from 'next/link';
import MyLink from '@/components/MyLink';

export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white px-10">
      <div className="max-w-5xl w-full flex lg:flex-row flex-col items-center gap-16">
        {/* Text Section */}
        <div className="flex-1 text-center">
          <h1 className="text-7xl font-bold text-yellow-500 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-black mb-4">Page Not Found</h2>
          <p className="text-gray-600 text-lg mb-8">
            Oops! The page you're looking for doesn't exist. You may have mistyped the URL or the page has been moved.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start md:flex-row flex-col ">
            <MyLink
            textColor='white'
            bgColor='var(--main-color)'
            styles='hover:bg-yellow-500'
            text='Go to Homepage'
              href="/"
            />
              
            <MyLink
            textColor='var(--main-color)'
            bgColor=''
            styles='hover:bg-yellow-50 border-mabg-main'
            text='Contact Support'
              href="/contact"
            />

          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <Image
            src={notFoundImage}
            alt="Not Found Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
}