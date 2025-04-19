import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { api } from "@/utils/api"; 
import { useQuery } from "@tanstack/react-query"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Home() {
  const {data, isLoading, isError} = useQuery(
    api.user.get.queryOptions({
      input: { id: "123" },  
    }),
  );

  const w = 150; 
  const h = 40;
 
  const Plus = () => <p className="text-4xl text-gray-500 dark:text-gray-400">+</p>;
  const imageClassName = "transition-all duration-300 ease-in-out transform cursor-pointer hover:scale-110 hover:-translate-y-2";

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[64px] row-start-2 items-center sm:items-start justify-center">
        <div className="flex flex-row gap-10 items-center justify-center"> 
          <a href="https://nextjs.org/docs/pages" target="_blank" rel="noopener noreferrer">
            <Image
              className={imageClassName + " dark:invert"}
              src="/next.svg"
              alt="Next.js logo"
              width={w}
              height={h}
              priority
            /> 
          </a>
          <Plus />
          <a href="https://orpc.unnoq.com/docs/getting-started" target="_blank" rel="noopener noreferrer">
            <Image
              className={imageClassName}
              src="/orpc.webp"
              alt="ORPC logo"
              width={w}
              height={h}
              priority
            />
          </a>
          <Plus />
          <a href="https://react-query.tanstack.com/" target="_blank" rel="noopener noreferrer">
            <Image
              className={imageClassName}
              src="/tanstack-query.png"
              alt="React Query logo"
              width={w}
              height={h}
              priority
            />
          </a>
          <Plus />
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">  
            <Image 
              className={imageClassName}
              src="/tailwind.svg"
              alt="Tailwind CSS logo"
              width={w}
              height={h}
              priority
            />
          </a>
        </div>
        <div className="w-full justify-center flex items-center">
          <ol className="list-inside list-decimal text-sm/6 text-start sm:text-left font-[family-name:var(--font-geist-mono)] ">
            <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/pages/index.tsx
              </code>
            .
            </li> 
            <li className="mb-2 tracking-[-.01em]">
            Edit the ORPC Routers at {" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/server/routes
              </code>
            .
            </li>  
          </ol> 
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row justify-center w-full">
          {
            isLoading ? (
              <p className="text-sm/6">Loading...</p>
            ) : isError ? (
              <p className="text-sm/6 text-red-500">Error fetching data</p>
            ) : (
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold">User Data:</h2>
                <pre className="bg-black p-4 rounded">
                  {JSON.stringify(data, null, 2)}
                </pre>
              </div>
            )
          }
        </div>
      </main> 
    </div>
  );
}
