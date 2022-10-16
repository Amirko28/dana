import type { UseFormSetValue } from 'react-hook-form';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { labelClassName } from '../../../styles/tailwind/textLabel';
import { RegisterPayload } from '../../Form';
import {
    NavigationLabel,
    DoublePreviousLabel,
    PreviousLabel,
    DoubleNextLabel,
    NextLabel,
} from '../calendar';

interface Props {
    displayName: string;
    fieldValue: keyof RegisterPayload;
    setValue: UseFormSetValue<RegisterPayload>;
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
                className={`mr-0 rounded-md !bg-zinc-900 text-base font-bold text-gray-300 lg:mr-2`}
                tileClassName={'hover:!bg-black'}
                nextLabel={
                    <NextLabel className="flex h-full w-full items-center justify-center !bg-zinc-900 text-base hover:!bg-black" />
                }
                next2Label={
                    <DoubleNextLabel className="flex h-full w-full items-center justify-center !bg-zinc-900 text-base hover:!bg-black" />
                }
                prevLabel={
                    <PreviousLabel className="flex h-full w-full items-center justify-center !bg-zinc-900 text-base hover:!bg-black" />
                }
                prev2Label={
                    <DoublePreviousLabel className="flex h-full w-full items-center justify-center !bg-zinc-900 text-base hover:!bg-black" />
                }
                navigationLabel={({ date, view }) => (
                    <NavigationLabel
                        date={date}
                        view={view}
                        className="flex h-full w-full items-center justify-center !bg-zinc-900 text-base hover:!bg-black"
                    />
                )}
                locale={'he'}
                calendarType={'Hebrew'}
                onChange={setSelectedDate}
                value={selectedDate}
            />
        </div>
    );
};
