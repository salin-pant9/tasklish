import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { AddEvents } from "@/slices/eventSlice";
import { AppDispatch, RootState } from "@/store";
import { format } from "date-fns";
import { createCard } from "@/lib/create_card";
import { useParams } from "next/navigation";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Plus } from "lucide-react";


type Props = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  eventStarttime: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  date: string;
  range: number;
  eventFinishtime: number;
  setEventFinishTime: React.Dispatch<React.SetStateAction<number>>;
  setData:React.Dispatch<any>,
  data:any
};

const EventModal = ({
  toggle,
  data,
  setData,
  setToggle,
  eventStarttime,
  eventFinishtime,
  setEventFinishTime,
  setTime,
  date,
  range,
}: Props) => {
  const token = useSelector((state: RootState) => state.token.token);
  const [title, setTittle] = useState("no title");
  const [description, setDescription] = useState("");

  const [eventStartDate, setEventStartDate] = useState(date);
  const [eventFinishDate, setEventFinishDate] = useState(date);
  const [type, setType] = useState("task");
  const [status, setStatus] = useState('TODO');

  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  function handleClick() {
    setToggle(false);
  }
  function handleStartDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEventStartDate(e.target.value);
    setEventFinishDate(e.target.value);
  }
  function handleFinishDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const stringDate = new Date(e.target.value);
    setEventFinishDate(() => format(stringDate, "yyyy-MM-dd"));
  }
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(+e.target.value);
    setEventFinishTime(+e.target.value + 1);
  };

  async function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let getStartDate = new Date(eventStartDate);
    let getDueDate = new Date(eventFinishDate);
     getStartDate.setHours(eventStarttime,0,0); 
     getDueDate.setHours(eventFinishtime,0,0);
    const returnData = await createCard({title, description, token, id:params.board_id as string, status, start_date:getStartDate.toISOString(), due_date:getDueDate.toISOString()});
    setData([...data,returnData]);
    const dateRange = Math.abs(
      +eventFinishDate.slice(-2) - +eventStartDate.slice(-2),
    );
    for (let i = 0; i <= dateRange; i++) {
      let startDate = +eventStartDate.slice(-2) + i;
      const eventStartDate1 = format(
        new Date(eventStartDate.slice(0, 8) + startDate),
        "yyyy-MM-dd",
      );
      // dispatch(
      //   AddEvents({
      //     title,
      //     status:'TODO',
      //     description,
      //     eventStarttime,
      //     eventFinishtime,
      //     eventStartDate: eventStartDate1,
      //     eventFinishDate: eventStartDate1,
      //     id: data.id,
      //     board: data.board,
      //   }),
      // );
    }

    // const dateRange = +eventFinishDate.slice(-2) - +eventStartDate.slice(-2);
    //for (let i = 0; i <= dateRange; i++) {
    // let startDate = +eventStartDate.slice(-2) + i;
    //const eventStartDate1 = eventStartDate.slice(0, 8) + startDate;
    //dispatch(
    // AddEvents({
    //  title,
    // description,
    //eventStarttime,
    //eventFinishtime,
    //eventStartDate: eventStartDate1,
    //eventFinishDate: eventStartDate1,
    // }),
    //);
    //}
    //dispatch(
    // AddEvents({
    //  title,
    // description,
    // eventStarttime,
    // eventFinishtime,
    //eventStartDate,
    //eventFinishDate,
    //}),
    //);
    setToggle(false);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Plus className="w-8 mr-5 cursor-pointer text-gray-500 h-8" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px}">
        <DialogHeader>
          <DialogTitle>Create a Task or Event</DialogTitle>
        </DialogHeader>
          <div className="">
            <div className="p-3">
              <section className="flex items-center justify-start gap-x-10 mb-10">
                <button
                  onClick={() => setType("task")}
                  className="border px-5 text-lg rounded-lg "
                >
                  Task
                </button>
                <button
                  onClick={() => setType("event")}
                  className="border px-5 text-lg rounded-lg"
                >
                  Event
                </button>
              </section>
              <form className="grid gap-4 py-4" onSubmit={Submit}>
                <section className="flex flex-col space-y-3">
                  <h1 className="font-600 text-xl">Title</h1>
                  <input
                    type="text"
                    className="border-b-2 outline-none bg-transparent"
                    onChange={(e) => setTittle(e.target.value)}
                  />
                </section>
                <section className="flex flex-col space-y-3">
                  <h3 className=" text-lg">Description</h3>
                  <input
                    type="text"
                    className="border-b-2 outline-none bg-transparent"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </section>
                <section className="flex flex-col space-y-3">
                  <h3>Date</h3>
                  {type === "task" ? (
                    <input
                      type="date"
                      className="border-b-2 outline-none bg-transparent"
                      onChange={handleStartDateChange}
                      defaultValue={eventStartDate}
                    />
                  ) : (
                    <section className="flex w-full items-center justify-between ">
                      <>
                        <label
                          className={`${range < 7 ? "hidden" : "inline-flex"}`}
                        >
                          From:{" "}
                        </label>
                        <input
                          type="date"
                          className="border-b-2 outline-none bg-transparent w-full"
                          onChange={handleStartDateChange}
                          defaultValue={eventStartDate}
                        />
                      </>

                      <section
                        className={`${range < 7 ? "hidden" : "inline-flex"}`}
                      >
                        <label>To: </label>
                        <input
                          type="date"
                          className="border-b-2 outline-none bg-transparent"
                          onChange={handleFinishDateChange}
                          defaultValue={eventFinishDate}
                        />
                      </section>
                    </section>
                  )}
                </section>
                {/* <section>
                                      <h3>Time : </h3>
                                      <input type="text" className='border-b-2 outline-none bg-transparent w-full' />
                                    </section> */}
                <section className="flex flex-col space-y-3">
                  <label htmlFor="time_duration">
                    Time duration (24hr format) :{" "}
                  </label>
                  <section className="flex items-center justify-between w-full  gap-x-10">
                    <section className="flex items-center gap-x-2">
                      <label>From: </label>
                      <input
                        type="text"
                        className="  border-b-2 outline-none bg-transparent w-full"
                        defaultValue={eventStarttime}
                        onChange={handleTimeChange}
                      />
                    </section>
                    <section
                      className={`${
                        type === "task" && "hidden w-full"
                      } flex items-center gap-x-2`}
                    >
                      <label>To: </label>
                      <input
                        type="text"
                        className="  border-b-2 outline-none bg-transparent w-full"
                        defaultValue={eventFinishtime}
                        onChange={(e) => setEventFinishTime(+e.target.value)}
                      />
                    </section>
                  </section>
                </section>
                <DialogFooter className="">
                  <DialogClose >

                  <button className="bg-primary text-[#ffffff] rounded-xl p-3 w-full">
                    Save
                  </button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </div>
          </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;
