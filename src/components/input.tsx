import clsx from "clsx";

interface InputProps {
  label: string;
  type: "email" | "password";
  placeholder?: string;
  required?: boolean;
}

export default function Input({
  label,
  type,
  placeholder,
  required,
}: Readonly<InputProps>) {
  return (
    <label className="block">
      <span
        className={clsx("block text-sm font-medium text-slate-700", {
          "after:content-['*'] after:ml-0.5 after:text-red-500":
            required == true,
        })}
      >
        {label}
      </span>
      <input
        type={type}
        id={type}
        name={type}
        aria-required={required}
        placeholder={placeholder}
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-sky-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1"
      />
    </label>
  );
}
