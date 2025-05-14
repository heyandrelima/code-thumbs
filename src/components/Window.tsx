export default function Window({
  children,
  ref,
}: {
  children: React.ReactNode;
  ref: React.Ref<HTMLDivElement>;
}) {
  return (
    <div className="w-full h-full shadow-2xl" ref={ref}>
      {/* top bar */}
      <div className="h-[32px] bg-gray-100 rounded-tl-lg rounded-tr-lg mb-0">
        {/* buttons on the left */}
        <div className=" ml-2 flex items-center justify-start h-full">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-1" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
      </div>
      <div className="mt-0 rounded-bl-lg rounded-br-lg border-gray-100 border-1 overflow-hidden">{children}</div>
    </div>
  );
}
