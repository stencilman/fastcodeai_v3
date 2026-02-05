import Button from './component/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h2 className="text-4xl md:text-6xl font-bold font-bwmss01 mb-4">404</h2>
      <p className="text-xl md:text-2xl font-aeonik mb-8 text-gray-300">Page Not Found</p>
      <div className="flex gap-4">
        <Button to="/" name="Return Home" type="primary" />
      </div>
    </div>
  );
}
