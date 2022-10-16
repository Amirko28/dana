import { labelClassName } from '../../../styles/tailwind/textLabel';

export const SubmitButton = () => {
    return (
        <input
            className={`
                ${labelClassName}
                w-full
                cursor-pointer
                rounded
                border-none
                bg-blue-500
                p-5
                font-extrabold
                tracking-widest
                shadow-md
                transition
                duration-150
                ease-in-out
                hover:bg-blue-600
                hover:shadow-lg 
                focus:shadow-lg
                focus:outline-none
                focus:ring-0
                active:bg-blue-800
                active:shadow-lg
                `}
            value="שלח"
            type="submit"
        />
    );
};