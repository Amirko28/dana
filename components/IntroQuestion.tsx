import Link from 'next/link';
import { labelClassName } from '../styles/tailwind/textLabel';

export const IntroQuestion = () => (
    <div
        dir="rtl"
        className="flex h-screen w-screen flex-col items-center justify-center space-y-4 bg-zinc-700 font-body"
    >
        <Link href="/form">
            <div
                className={`
                ${labelClassName}
                w-5/6
                cursor-pointer
                active:shadow-lg
                lg:h-3/4
                `}
            >
                <div className="flex h-full w-full flex-col justify-center space-y-14 rounded-lg border-4 border-pink-400 shadow-lg">
                    <p className="self-center text-8xl">חושבים שמגיע לכם החזר מס?</p>
                    <p className="self-center text-5xl ">לחצו כאן לבדיקה ללא עלות</p>
                </div>
            </div>
        </Link>
        <div
            className={`
            ${labelClassName}
            h-fit
            w-5/6
            text-2xl`}
        >
            ** הבדיקה מתבצעת ידנית על ידי מומחי מיסוי ממשרד DK ניהול כספים - דנה כתר
        </div>
    </div>
);
