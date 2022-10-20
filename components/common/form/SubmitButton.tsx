import { Loading } from '../../Loading';

interface Props {
    isLoading: boolean;
}

export const SubmitButton = ({ isLoading }: Props) => {
    return (
        <button
            className="
                w-full
                cursor-pointer
                rounded
                border-none
                bg-primary 
                p-5
                text-lg
                font-extrabold
                tracking-widest
                text-white
                shadow-md
                transition
                duration-150
                ease-in-out
                hover:shadow-xl
                focus:shadow-lg 
                focus:outline-none
                focus:ring-0
                active:shadow-2xl
                lg:text-3xl
                "
            type="submit"
        >
            {isLoading ? <Loading /> : 'שלח'}
        </button>
    );
};
