import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

const Center = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-grow">
      <header>
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full w-10"
            src={session?.user?.image}
            alt={session?.user?.name}
          />
          <h2>{session?.user?.name}</h2>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black from-red-500 h-80 text-white p-8`}
      >
        <h1>Hello</h1>
      </section>
    </div>
  );
};

export default Center;
