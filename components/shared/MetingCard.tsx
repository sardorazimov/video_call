/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

import { useToast } from "../ui/use-toaster";
import { Copy } from "lucide-react";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-white/15 px-5 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        <Image src={icon} alt="upcoming" width={28} height={28} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <div className="relative flex w-full max-sm:hidden">
          <img src="/images/img.jpg" alt="" 
           style={{ top: 0, left: 28 }}
           className="w-10 h-10 rounded-full"
          />
          <img src="/images/img1.jpg" alt="" 
           style={{ top: 0, left: 28 }}
           className="w-10 h-10 rounded-full"
          />
          <img src="/images/img2.jpg" alt="" 
           style={{ top: 0, left: 28 }}
           className="w-10 h-10 rounded-full"
          />
          <img src="/images/img3.jpg" alt="" 
           style={{ top: 0, left: 28 }}
           className="w-10 h-10 rounded-full"
          />
          <img src="/images/img4.jpg" alt="" 
           style={{ top: 0, left: 28 }}
           className="w-10 h-10 rounded-full"
          />
          <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-white/10">
            +5
          </div>
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-2">
            <Button onClick={handleClick} className="rounded bg-white/10  px-6">
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Copied",
                });
              }}
              className="bg-white/10 px-6"
            >
              <Copy  className="text-white" size={25}/>
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;