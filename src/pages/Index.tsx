import { useState } from "react";
import Hero from "@/components/Hero";
import Loading from "@/components/Loading";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loading onComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen">
        <main>
          <Hero />
        </main>
      </div>
    </>
  );
};

export default Index;
