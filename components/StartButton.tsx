import Link from 'next/link';
import Image from 'next/image';
import RectangleLogo from '../public/dana-ketter-rectangle-logo.jpg';
import { labelClassName } from '../styles/tailwind/textLabel';

export const StartButton = () => (
    <Link href="/form">
        <div
            className={`
                ${labelClassName}
                h-full
                cursor-pointer
                active:shadow-lg
                `}
        >
            <section className="mt-4 h-full rounded-md bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 lg:bg-gradient-to-l">
                <div className="px-6 py-12 text-center md:px-12 lg:text-right">
                    <div className="container mx-auto">
                        <div className="flex flex-col justify-between lg:flex-row lg:justify-around">
                            <div className="mb-8 flex flex-col justify-center lg:mb-0">
                                <h1 className="mb-8 text-5xl font-bold tracking-tight text-blue-200 md:text-6xl lg:mb-12 xl:text-7xl">
                                    חושבים שמגיע לכם <br />
                                    <span className="text-blue-300">החזר מס?</span>
                                </h1>
                                <p className="text-3xl text-[#e8effd]">
                                    לחצו כאן לבדיקה ללא עלות!
                                </p>
                            </div>
                            <Image
                                className="h-full w-full overflow-hidden rounded-lg shadow-lg"
                                src={RectangleLogo}
                                alt="דנה כתר"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Link>
);
