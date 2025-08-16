import * as React from "react";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", ...rest } = props;
  return (
    <button
      className={`inline-flex items-center rounded-xl bg-brand-500 bg-amber-500 text-white px-4 py-2 font-medium hover:bg-brand-700 ${className}`}
      {...rest}
    />
  );
}
