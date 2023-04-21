import dynamic from 'next/dynamic';
import { StartButton } from './StartButton';

const Carousel = dynamic(() => import('./Carousel'), { ssr: false });

export const LandingPage = () => {
    return (
        <div
            dir="rtl"
            className="flex h-screen w-screen flex-col items-center justify-center space-y-4 bg-background py-4 font-body lg:h-screen lg:w-screen"
        >
            <div className="mt-4 flex h-full w-5/6 flex-col space-y-4 lg:w-11/12 lg:space-y-12">
                <StartButton />
                <Carousel />
                <div className="h-1/12 text-xs font-bold text-secondary lg:w-11/12">
                    ** הבדיקה מתבצעת ידנית על ידי מומחי מיסוי ממשרד DK ניהול כספים - דנה
                    כתר
                </div>
            </div>
        </div>
    );
};
