import { format } from 'date-fns';
import { he } from 'date-fns/locale';
import type { Detail } from 'react-calendar';

interface Props {
    date: Date;
    view: Detail;
    className?: string;
}

const getDecadeString = (date: Date, locale: Locale) => {
    const currDecadeNumber = Math.floor(+format(date, 'yyyy', { locale: locale }) / 10);
    return `${currDecadeNumber}0 - ${currDecadeNumber + 1}0`;
};

const getCenturyString = (date: Date, locale: Locale) => {
    const currCenturyNumber = Math.floor(+format(date, 'yyyy', { locale: locale }) / 100);
    return `${currCenturyNumber}00 - ${currCenturyNumber + 1}00`;
};

const formatDate = (date: Date, view: Detail) => {
    return view === 'month'
        ? format(date, 'MMMM yyyy', { locale: he })
        : view === 'year'
        ? format(date, 'yyyy', { locale: he })
        : view === 'decade'
        ? getDecadeString(date, he)
        : view === 'century'
        ? getCenturyString(date, he)
        : '';
};

export const NavigationLabel = ({ date, className, view }: Props) => (
    <div className={className}>{formatDate(date, view)}</div>
);
