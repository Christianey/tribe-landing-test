/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <div className="sm: h-full w-full flex-1 py-5 pt-20">
          <div className="container mx-auto w-full max-w-7xl px-4 sm:px-10">
            <div className="relative mx-auto sm:h-96 w-full px-5 py-10 sm:py-20 sm:px-20">
              <Image
                height={100}
                width={100}
                alt="Error banner"
                className="h-full w-full"
                src="/images/not-found.svg"
              />
            </div>
            <p className="text-center text-sm md:text-base font-medium leading-normal mx-auto max-w-md">
              We can't find the page you are looking for, This is not your
              fault. Please report this issue so we can fix it.
            </p>
            <div className="mt-2 flex justify-center">
              <div className="py-10">
                <Link href="/business">
                  <Button intent="primary" size="lg">
                    Go back home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
