import * as React from "react";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className = "", type = "text", ...rest } = props;

  return (
    <input
      type={type}
      className={`inline-flex items-center rounded-xl bg-amber-500 text-white px-4 py-2 font-medium hover:bg-amber-600 dark:bg-blue-600 dark:hover:bg-blue-700 ${className}`}
      {...rest}
    />
  );
}