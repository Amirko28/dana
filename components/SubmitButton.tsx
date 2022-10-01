import { labelClassName } from './TextField';

export const SubmitButton = () => {
    return (
        <input
            className={`
                ${labelClassName}
                mt-6
                w-full
                cursor-pointer
                rounded
                border-none
                bg-pink-400
                p-5
                font-extrabold
                tracking-widest
                shadow-md
                transition
                duration-150
                ease-in-out
                hover:bg-pink-500
                hover:shadow-lg 
                focus:shadow-lg
                focus:outline-none
                focus:ring-0
                active:bg-pink-600
                active:shadow-lg
                `}
            value="שלח"
            type="submit"
        />
    );
};
