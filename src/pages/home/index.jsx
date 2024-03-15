import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
   const [count, setCount] = useState(1);

   return (
      <div className="flex h-screen items-center justify-center bg-zinc-900">
         <div className="container mx-auto flex items-center justify-center gap-2  p-4">
            <Button
               className="border border-zinc-50/20 bg-transparent"
               onClick={() => {
                  if (!count <= 0) {
                     setCount(count - 1);
                  }
               }}
            >
               Decrement
            </Button>

            <Input
               className="max-w-[100px] text-center"
               value={count}
               onChange={(event) => setCount(Number(event.target.value))}
            />

            <Button
               className="border border-zinc-50/20 bg-transparent"
               onClick={() => {
                  setCount(count + 1);
               }}
            >
               Increment
            </Button>
         </div>
      </div>
   );
}
