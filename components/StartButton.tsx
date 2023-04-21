import Link from 'next/link';
import Image from 'next/image';
import RectangleLogo from '../public/dana-ketter-rectangle-logo.jpg';
import { labelClassName } from '../styles/tailwind/textLabel';

export const StartButton = () => (
    <Link href="/form">
        <div
            className={`
                ${labelClassName}
                h-7/12
                cursor-pointer
                active:shadow-lg
                lg:h-2/3
                `}
        >
            <section className="h-full rounded-md bg-white bg-gradient-to-b from-white via-blue-200 to-blue-300 drop-shadow-2xl lg:bg-gradient-to-l">
                <div className="h-full px-6 py-10 text-center md:px-12 lg:text-right">
                    <div className="flex h-full flex-col justify-between space-y-2 lg:flex-row lg:justify-around lg:space-y-0">
                        <div className="mb-8 flex h-5/12 flex-col justify-center lg:mb-0 lg:h-11/12">
                            <h1 className="mb-8 text-2xl font-bold tracking-tight text-secondary md:text-6xl lg:mb-12 xl:text-7xl">
                                חושבים שמגיע לכם <br />
                                <span className="text-primary">החזר מס?</span>
                            </h1>
                            <p className="text-xl text-secondary">
                                לחצו כאן לבדיקה ללא עלות!
                            </p>
                        </div>
                        <div className="flex h-7/12 items-center justify-center lg:h-11/12">
                            <div className="relative h-full w-3/4 rounded-lg drop-shadow-2xl md:mx-36 lg:mx-6 lg:h-60 lg:w-80">
                                <Image
                                    className="h-full w-full overflow-hidden rounded-lg border-2 border-primary shadow-2xl"
                                    src={RectangleLogo}
                                    alt="דנה כתר"
                                    layout="fill"
                                    objectFit="fill"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Link>
);
