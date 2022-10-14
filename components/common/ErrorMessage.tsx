interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <p
            id="standard_error_help"
            className="mt-2 text-xs text-red-600 dark:text-red-400"
        >
            {message}
        </p>
    );
};

// export const ErrorMessage = ({ message }: ErrorMessageProps) => (
//     <p className="mt-1 mr-2 text-lg text-red-500">{message}</p>
// );
