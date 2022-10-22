import Link from 'next/link';
import Image from 'next/image';
import RectangleLogo from '../public/dana-ketter-rectangle-logo.jpg';
import { linkClassName } from '../styles/tailwind/link';

export const Finish = () => (
    <div
        dir="rtl"
        className="flex h-screen w-screen items-center justify-center bg-background py-8 px-4 font-body md:p-20 lg:p-8"
    >
        <div className="flex h-full w-full flex-col justify-center rounded-lg border-2 bg-white drop-shadow-lg  lg:w-3/4">
            <div className="flex h-full w-full flex-col items-center justify-center space-y-24 text-lg font-bold text-secondary lg:space-y-16 lg:text-3xl">
                <div className="flex flex-col items-center justify-center text-3xl lg:text-6xl">
                    <p className="text-primary">אז נשתמע בקרוב, אה?</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p>DK ניהול כספים וליווי פיננסי</p>
                    <Link href={`mailto:${process.env.NEXT_PUBLIC_DK_EMAIL || '/'}`}>
                        <p className={`${linkClassName}`}>
                            {process.env.NEXT_PUBLIC_DK_EMAIL || ''}
                        </p>
                    </Link>
                    <p>{process.env.NEXT_PUBLIC_DK_PHONE || ''}</p>
                </div>
                <div
                    className={`${linkClassName} flex cursor-pointer flex-col items-center justify-center break-words`}
                >
                    <Link
                        href={`${process.env.NEXT_PUBLIC_FB_LINK || '/'}`}
                        target="_blank"
                    >
                        <p>בואו לעקוב אחרינו בעמוד העסקי!</p>
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <div className="relative h-32 w-48 rounded-lg drop-shadow-2xl md:mx-36 lg:mx-6 lg:h-60 lg:w-80">
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
    </div>
);
