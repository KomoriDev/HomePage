import Image from "next/image";
import Github from "@/components/icons/Github";
import Twitter from "@/components/icons/Twitter";

export default function Page() {
  return (
    <main className="flex flex-col items-center my-32">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5C8FFF] to-[#B5CCFF] opacity-30
                    dark:from-[#1E3A8A] dark:to-[#4F46E5] dark:opacity-40
                    sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <Image
        className="rounded-full"
        src="/avatar.jpg"
        alt="Avatar"
        width={120}
        height={120}
        priority
      />
      <div className="flex flex-col items-center gap-2 mt-3">
        <p className="text-black font-bold text-4xl dark:text-white">
          Komorebi
        </p>
        <p className="text-black dark:text-white">承蒙时光不弃，感谢一切相遇</p>
      </div>

      <div className="flex gap-10 mt-5">
        <a href="https://github.com/KomoriDev">
          <Github />
        </a>
        <a href="https://x.com/komorebi231010">
          <Twitter />
        </a>
      </div>
    </main>
  );
}
