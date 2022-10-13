interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
    <p className="mt-1 mr-2 text-lg text-red-500">{message}</p>
);
