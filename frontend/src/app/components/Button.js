// app/components/Button.js

export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`w-full px-4 py-2.5 font-semibold text-white bg-gray-700 rounded-xl shadow-sm  
        hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        active:scale-[0.98] transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
