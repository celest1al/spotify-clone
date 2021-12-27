import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen w-full">
      <img className="w-52 mb-5" src="/icons/spotify-logo.png" alt="spotify" />
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="bg-[#18D860] text-white p-5 rounded-lg"
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const providers = await getProviders();

  return {
    props: {
      providers: providers,
    },
  };
};

export default Login;
