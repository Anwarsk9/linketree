import { useFormStatus } from "react-dom";
import { ReactNode } from "react";
const LoadingBtn = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        disabled={pending}
        className={className + " disabled:text-gary-500 disabled:bg-blue-300"}
      >
        {pending && <span>Saving....</span>}
        {!pending && children}
      </button>
    </>
  );
};

export default LoadingBtn;
