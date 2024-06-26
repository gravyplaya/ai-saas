const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
            <div className="sticky top-0 w-full bg-blue-700 z-50">
  <div className="container mx-auto px-4">
    <div className="h-10 flex items-center justify-center text-center">
          <a href="https://nocodb.tavonni.com/dashboard/#/nc/form/88a9893e-6231-4324-942f-df121800d6d5" className="text-yellow-200 font-bold">
        Sign Up For Burgess Bash 2024
      </a>  🥳
    </div>
  </div>
</div>
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
