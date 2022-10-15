import type { UseFormSetValue } from 'react-hook-form';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { labelClassName } from '../../styles/tailwind/textLabel';
import { RegisterPayload } from '../Form';
import { NextLabel } from '../calendar/NextLabel';
import { DoubleNextLabel } from '../calendar/DoubleNextLabel';
import { PreviousLabel } from '../calendar/PreviousLabel';
import { DoublePreviousLabel } from '../calendar/DoublePreviousLabel';
import { NavigationLabel } from '../calendar/NavigationLabel';

interface Props {
    displayName: string;
    fieldValue: keyof RegisterPayload;
    setValue: UseFormSetValue<any>;
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
                className={`mr-2 rounded-md !bg-zinc-800 text-base font-bold text-gray-300`}
                tileClassName={'hover:!bg-zinc-900'}
                nextLabel={
                    <NextLabel className="flex h-full w-full items-center justify-center !bg-zinc-800 text-base hover:!bg-zinc-900" />
                }
                next2Label={
                    <DoubleNextLabel className="flex h-full w-full items-center justify-center !bg-zinc-800 text-base hover:!bg-zinc-900" />
                }
                prevLabel={
                    <PreviousLabel className="flex h-full w-full items-center justify-center !bg-zinc-800 text-base hover:!bg-zinc-900" />
                }
                prev2Label={
                    <DoublePreviousLabel className="flex h-full w-full items-center justify-center !bg-zinc-800 text-base hover:!bg-zinc-900" />
                }
                navigationLabel={({ date, view }) => (
                    <NavigationLabel
                        date={date}
                        view={view}
                        className="flex h-full w-full items-center justify-center !bg-zinc-800 text-base hover:!bg-zinc-900"
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
