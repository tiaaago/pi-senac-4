// app/components/Card.js
export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm ${className}`}>
      {children}
    </div>
  );
}