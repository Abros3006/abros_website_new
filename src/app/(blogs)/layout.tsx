

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] mb-16">
        { children }
      <div>
      </div>
    </div>
  );
}