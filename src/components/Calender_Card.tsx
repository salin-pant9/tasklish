import React, { useState } from "react";
import EventModal from "./EventModal";
import { useAppSelector } from "@/store";
import { format } from "date-fns";
import { useParams } from "next/navigation";
import { CirclePlus, Ellipsis, PlusIcon } from "lucide-react";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

type Props = {
  days: string[];
  state: {
    startDate: Date;
    endDate: Date;
    key: string;
  };
  range: number;
  array: number;
  times: number[];
};

const Calender_Card = ({ days, state, range, array, times }: Props) => {
  const [toggle, setToggle] = useState(false);
  const [startTime, setstartTime] = useState<number>(times[0] - 1);
  const [eventFinishtime, setEventFinishTime] = useState<number>(startTime + 1);
  const event = useAppSelector((state) => state.event);
  const params = useParams()
  let individualDate = format(state.startDate, "yyyy-MM-dd");
  const specificDate = +individualDate.slice(-2) + array;
  //  individualDate = format(
  //   new Date(individualDate.slice(0, -2) + specificDate),
  //  "yyyy-MM-dd",
  // );
  individualDate = format(
    new Date(individualDate.slice(0, -2) + specificDate),
    "yyyy-MM-dd",
  );
  console.log(event.items);
  function handleClick(time: number) {
    // setToggle(true);
    setstartTime(time);
    setEventFinishTime(time + 1);
  }
  return (
    <div
      className={`flex flex-col justify-start items-start  border-r-2 border-r-[#90D26D] w-full `}
    >
      <div className="flex items-center justify-between w-full">
        <section className="flex flex-col space-y-[-10rem} ml-5 ">
          <p className="font-bold text-[30px] text-[#FFAF45]">
            {specificDate}{" "}
          </p>

          <p className="font-bold  ">
            {days[(state.startDate.getDay() + array) % 7]}
          </p>
        </section>
        <section>
          <EventModal
            toggle={toggle}
            setToggle={setToggle}
            eventStarttime={startTime}
            setTime={setstartTime}
            date={individualDate}
            range={range}
            setEventFinishTime={setEventFinishTime}
            eventFinishtime={eventFinishtime}
          />
          {/* <PlusIcon onClick={() => setToggle(true)} className=" cursor-pointer w-7 h-7 mr-5 text-gray-500"/> */}
        </section>
      </div>

      <section className="mt-5 w-full">
        {range <= 7 ? (
          times.map((index, time) => (
            <>
              <section
                key={index}
                className={`border-t  w-full min-h-[3rem] flex items-center`}
                onClick={() => handleClick(time)}
              >
                {/* {event.items.map((item) => (
                  <h2>{item.title}</h2>
                ))} */}
                {event.items
                  .filter(
                    (item) =>
                      item.eventStartDate === individualDate &&
                      item.board === parseInt(params.board_id as string) &&
                      item.eventStarttime === time
                  )
                  .map((e, index) => (
                    <div
                      key={index}
                      className="group bg-[#58A399] z-10 h-[3rem] text-[#ffffff] w-full rounded-xl px-2 flex items-center justify-between  gap-y-1 "
                    >
                      <p>{e.title}</p>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Ellipsis className=" h-6 w-6" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-white w-52 z-50">
                            <div className="flex flex-col gap-y-5 p-3">
                              <p
                                onClick={() => {
                                  alert("clicked");
                                  setToggle(false);
                                }}
                                className="text-black hover:bg-muted"
                              >
                                Update
                              </p>
                              <p className="text-destructive hover:bg-muted">
                                Delete
                              </p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ))}
                {/* <p>{time}</p> */}
              </section>
            </>
          ))
        ) : (
          <section
            className={`overflow-y-scroll scrollbar-hide   h-[20rem] border-b-2 border-lightGray `}
            // onClick={(e) => setToggle(true)}
          >
            {event.items
              .filter((item) => item.eventStartDate === individualDate)
              .map((e, index) => (
                <p
                  key={index}
                  className="bg-[#58A399] text-[#ffffff] min-w-1/5 rounded-xl px-2 mt-2 "
                >
                  {e.title} ({e.eventStarttime}:00 - {e.eventFinishtime}:00 )
                </p>
              ))}
          </section>
        )}
      </section>
    </div>
  );
};

export default Calender_Card;
