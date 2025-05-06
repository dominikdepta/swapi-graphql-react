import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CloudAlert } from "lucide-react";

export const NoDataAlert = () => {
  return (
    <Alert>
      <CloudAlert className="h-4 w-4" />
      <AlertTitle>No data</AlertTitle>
      <AlertDescription>
        No films were found. Please try again later.
      </AlertDescription>
    </Alert>
  );
};
