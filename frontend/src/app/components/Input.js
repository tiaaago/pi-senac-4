export default function Input({ type, placeholder, ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-white 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
      {...props}
    />
  );
}