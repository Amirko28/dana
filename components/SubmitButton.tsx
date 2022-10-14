import { labelClassName } from '../styles/tailwind/textLabel';

export const SubmitButton = () => {
    return (
        <input
            className={`
                ${labelClassName}
                mt-12
                w-full
                cursor-pointer
                rounded
                border-none
                bg-blue-400
                p-5
                font-extrabold
                tracking-widest
                shadow-md
                transition
                duration-150
                ease-in-out
                hover:bg-blue-500
                hover:shadow-lg 
                focus:shadow-lg
                focus:outline-none
                focus:ring-0
                active:bg-blue-600
                active:shadow-lg
                `}
            value="שלח"
            type="submit"
        />
    );
};
