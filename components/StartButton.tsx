import Link from 'next/link';
import Image from 'next/image';
import RectangleLogo from '../public/dana-ketter-rectangle-logo.jpg';
import { labelClassName } from '../styles/tailwind/textLabel';

export const StartButton = () => (
    <Link href="/form">
        <div
            className={`
                ${labelClassName}
                h-96
                cursor-pointer
                active:shadow-lg
                `}
        >
            <section className="h-full rounded-md bg-white bg-gradient-to-b from-white via-blue-200 to-blue-300 drop-shadow-2xl lg:bg-gradient-to-l">
                <div className="px-6 py-10 text-center md:px-12 lg:text-right">
                    <div className="container mx-auto">
                        <div className="flex flex-col justify-between lg:flex-row lg:justify-around">
                            <div className="mb-8 flex flex-col justify-center lg:mb-0">
                                <h1 className="mb-8 text-5xl font-bold tracking-tight text-secondary md:text-6xl lg:mb-12 xl:text-7xl">
                                    חושבים שמגיע לכם <br />
                                    <span className="text-primary">החזר מס?</span>
                                </h1>
                                <p className="text-3xl text-secondary">
                                    לחצו כאן לבדיקה ללא עלות!
                                </p>
                            </div>
                            <div className="rounded-lg drop-shadow-2xl">
                                <Image
                                    className="overflow-hidden rounded-lg border-2 border-primary shadow-2xl"
                                    src={RectangleLogo}
                                    alt="דנה כתר"
                                    height={300}
                                    width={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Link>
);
