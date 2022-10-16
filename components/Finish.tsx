import Link from 'next/link';
import Image from 'next/image';
import RectangleLogo from '../public/dana-ketter-rectangle-logo.jpg';
import { linkClassName } from '../styles/tailwind/link';

export const Finish = () => (
    <div dir="rtl" className="h-screen w-screen flex-col bg-zinc-800 font-body">
        <div className="flex h-full w-full flex-col items-center justify-center space-y-16 text-lg font-bold text-gray-300 lg:text-3xl">
            <div className="flex flex-col items-center justify-center text-3xl lg:text-6xl">
                <p className="text-blue-500">אז נשתמע בקרוב, אה?</p>
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
                <Link href={`${process.env.NEXT_PUBLIC_FB_LINK || '/'}`} target="_blank">
                    <p>בואו לעקוב אחרינו בעמוד העסקי!</p>
                </Link>
            </div>
            <div>
                <Image
                    className="overflow-hidden rounded-lg shadow-lg"
                    src={RectangleLogo}
                    alt="דנה כתר"
                    height={200}
                    width={300}
                />
            </div>
        </div>
    </div>
);
