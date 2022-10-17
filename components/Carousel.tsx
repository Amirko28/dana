import Slider from 'react-slick';

import { useBreakpoint } from '../styles/tailwind/isBreakpoint';

interface ItemProps {
    title: string;
    content: string;
}

const Item = ({ title, content }: ItemProps) => (
    <div
        className="my-2 mx-8 flex h-56 w-5/6 flex-col space-y-2 rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-md hover:bg-gray-700 lg:my-0 lg:mx-12 lg:space-y-0"
        style={{ direction: 'rtl' }}
    >
        <h5 className="mb-2 h-32 overflow-hidden text-sm font-bold tracking-tight text-white lg:text-2xl">
            {title}
        </h5>
        <p className="h-full text-sm font-normal text-gray-400 lg:text-base">{content}</p>
    </div>
);

const Carousel = () => {
    const { isLg } = useBreakpoint('lg');

    return (
        <div className="mx-2 mb-4 h-full w-full lg:mb-10">
            <Slider
                infinite={true}
                adaptiveHeight={true}
                autoplay={false}
                autoplaySpeed={4000}
                dots={false}
                speed={2000}
                rtl={isLg}
                slidesToShow={isLg ? 3 : 1}
                vertical={!isLg}
                arrows={isLg}
                swipe={false}
                pauseOnHover={isLg}
            >
                <Item
                    key={'אבנר שולץ, יזם'}
                    title={'אבנר שולץ, יזם'}
                    content={
                        'דנה התותחית נותנת שירות מקצועי בכל שעה. תמיד עם חיוך, ועוזרת לפתור כל בעיה בירוקרטית במהירות וביעילות! ממליץ בחום! 🌟'
                    }
                />
                <Item
                    key={'שרה בולטוב, בעלת מותג תכשיטים'}
                    title={'שרה בולטוב, בעלת מותג תכשיטים'}
                    content={
                        'מאוד ממליצה למי שרוצה מנהלת חשבונות הכי מקצועית ולא מוכן להתפשר. אשת מקצוע שליוותה שעשתה את העבודה שלה בצורה הכי מדויקת שיש, מאוד נעמה גם בפן האישי.'
                    }
                />
                <Item
                    key={'אריאל דימנט, זמרת, שחקנית ומורה לפיתוח קול'}
                    title={'אריאל דימנט, זמרת, שחקנית ומורה לפיתוח קול'}
                    content={
                        'דנה מדהימה! מקצועית עד לפרט הכי קטן והכי חשוב היחס האישי והסובלנות שלה כלפי לקוחות, אני אישית מאוד מרוצה וממליצה בחום!'
                    }
                />
                <Item
                    key={'איתי גרונזיצקי, מתווך נדל"ן ויזם'}
                    title={'איתי גרונזיצקי, מתווך נדל"ן ויזם'}
                    content={'ממליץ מאוד,מספר 1 בתחום'}
                />
                <Item
                    key={'רו"ח רון יעקובזון, רואה חשבון וסוכן פנסיוני'}
                    title={'רו"ח רון יעקובזון, רואה חשבון וסוכן פנסיוני'}
                    content={
                        'אני ממליץ בחום גדול על דנה. דנה מאוד מקצועית ובעלת ידע נרחב בכל תחומי החשבונאות, שכר, הנה"ח ועוד. מניסיון אישי- רק תרוויחו!'
                    }
                />
                <Item
                    key={"אלמה תורג'מן, שכירה בהייטק"}
                    title={"אלמה תורג'מן, שכירה בהייטק"}
                    content={
                        'היה לי לעונג להכיר את האדם, הנפש, והאשה המדהימה הזו. תמיד נמצאת שם בכדי לסייע, לעזור, לענות על כל שאלה ושאלה ומבצעת את עבודתה על הצד הטוב ביותר ובמהירות בזק. לב ענק ושירות מעל ומעבר. ממליצה בחום!!!!'
                    }
                />
                <Item
                    key={'חגי שולץ, יזם'}
                    title={'חגי שולץ, יזם'}
                    content={'יחס אישי מדהים ומקצועית ביותר! מומלץ'}
                />
                <Item
                    key={'מיטל גטניו, שכירה'}
                    title={'מיטל גטניו, שכירה'}
                    content={
                        'דנה עזרה לי לקבל כסף שמגיע לי החזר ממס הכנסה. שירותית מאוד, אדיבה ומקצועית. המענה היה מהיר ובזכותה קיבלתי את המגיע לי תוך מספר ימים. תודה לך דנה ממליצה בחום'
                    }
                />
                <Item
                    key={'עדי חייקה שוורץ, בעלת עסק לעוגות מעוצבות'}
                    title={'עדי חייקה שוורץ, בעלת עסק לעוגות מעוצבות'}
                    content={
                        'ממליצה מאוד מקצועיות שאין כדוגמתה שירות מהיר יחס אישי פשוט כיף ממליצה מאוד'
                    }
                />
            </Slider>
        </div>
    );
};

export default Carousel;
