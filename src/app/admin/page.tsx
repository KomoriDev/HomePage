import Input from "@/components/input";

export default function Page() {
  return (
    <main className="flex justify-center py-40">
      <div className="p-10 bg-white border border-gray-200  rounded-xl shadow-sm">
        <div className="text-center">
          <h1 className="block text-2xl mb-2 font-bold text-gray-800 dark:text-black">
            Sign in
          </h1>
        </div>

        <form className="grid gap-y-4">
          <Input label="Password" type="password" />
          <button
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
