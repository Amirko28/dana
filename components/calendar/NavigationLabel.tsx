import { format } from 'date-fns';
import { he } from 'date-fns/locale';
import type { Detail } from 'react-calendar';

interface Props {
    date: Date;
    view: Detail;
    className?: string;
}

const formatDate = (date: Date, view: Detail) => {
    return view === 'month' ? format(date, 'MMMM yyyy', { locale: he }) : '';
};

export const NavigationLabel = ({ date, className, view }: Props) => (
    <div className={className}>{formatDate(date, view)}</div>
);
