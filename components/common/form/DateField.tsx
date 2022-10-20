import { useEffect, useState } from 'react';
import type { UseFormSetValue } from 'react-hook-form';
import Calendar from 'react-calendar';
import { isSameYear } from 'date-fns';
import 'react-calendar/dist/Calendar.css';
import { labelClassName } from '../../../styles/tailwind/textLabel';
import {
    NavigationLabel,
    DoublePreviousLabel,
    PreviousLabel,
    DoubleNextLabel,
    NextLabel,
} from '../calendar';
import { RegisterRequest } from '../../../models/request';

interface Props {
    displayName: string;
    fieldValue: keyof RegisterRequest;
    setValue: UseFormSetValue<RegisterRequest>;
}

export const DateField = ({ displayName, fieldValue, setValue }: Props) => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    useEffect(() => {
        setValue(fieldValue, selectedDate);
    }, [selectedDate, fieldValue, setValue]);

    return (
        <div key={displayName} className="flex flex-col space-y-3">
            <div className="flex flex-row items-center justify-start">
                <label htmlFor={displayName} className={`${labelClassName} mb-2 block`}>
                    {displayName}
                </label>
            </div>
            <Calendar
                view="decade"
                className={`mr-0 rounded-md !bg-background text-base font-normal text-secondary lg:mr-2`}
                onClickYear={(date, event) => setSelectedDate(date)}
                tileClassName={({ date }) => {
                    return isSameYear(date, selectedDate)
                        ? '!bg-tertiary hover:!font-bold'
                        : '!bg-background hover:!bg-tertiary hover:!font-bold';
                }}
                nextLabel={
                    <NextLabel className="flex h-full w-full items-center justify-center !bg-background text-base font-bold hover:!bg-tertiary" />
                }
                next2Label={
                    <DoubleNextLabel className="flex h-full w-full items-center justify-center !bg-background text-base font-bold hover:!bg-tertiary" />
                }
                prevLabel={
                    <PreviousLabel className="flex h-full w-full items-center justify-center !bg-background text-base font-bold hover:!bg-tertiary" />
                }
                prev2Label={
                    <DoublePreviousLabel className="flex h-full w-full items-center justify-center !bg-background text-base font-bold hover:!bg-tertiary" />
                }
                navigationLabel={({ date, view }) => (
                    <NavigationLabel
                        date={date}
                        view={view}
                        className="flex h-full w-full items-center justify-center !bg-background text-base font-bold hover:!bg-tertiary"
                    />
                )}
                locale={'he'}
                defaultValue={selectedDate}
                calendarType={'Hebrew'}
                value={selectedDate}
            />
        </div>
    );
};
