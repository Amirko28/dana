import { Carousel } from './Carousel';
import { StartButton } from './StartButton';

export const IntroQuestion = () => {
    return (
        <div
            dir="rtl"
            className="flex h-full w-full flex-col items-center justify-center space-y-4 bg-zinc-800 py-4 font-body"
        >
            <div className="flex h-full w-5/6 flex-col space-y-6 lg:w-11/12">
                <StartButton />
                <Carousel />
                <div className="text-xs font-bold text-gray-300 lg:w-11/12">
                    ** הבדיקה מתבצעת ידנית על ידי מומחי מיסוי ממשרד DK ניהול כספים - דנה
                    כתר
                </div>
            </div>
        </div>
    );
};
