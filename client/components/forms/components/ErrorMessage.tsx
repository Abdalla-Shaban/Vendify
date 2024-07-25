const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <span className="text-12 inline-block pl-0.5 text-red-600 leading-none mt-1">
      {message}.
    </span>
  );
};

export default ErrorMessage;
