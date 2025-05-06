import { LoaderCircle } from "lucide-react";

interface SpinnerProps {
  message?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ message }) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <LoaderCircle className="w-4 h-4 animate-spin" />
      {message && <p className="text-sm text-gray-500 ml-2">{message}</p>}
    </div>
  );
};
