import React from 'react'
import { Ellipsis } from 'lucide-react';
import UpdateCard from './UpdateCard';
import DeleteCard from './DeleteCard';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const CustomPopOver = ({item, setData,data}: any) => {
  return (

                      <Popover>
                          <PopoverTrigger asChild>
                            <Ellipsis className=" h-6 w-6 cursor-pointer" />
                          </PopoverTrigger>
                          <PopoverContent className="bg-white w-52 ">
                            <div className="flex flex-col gap-y-5 p-3">
                              {/* <p
                                onClick={() => {
                                  alert("clicked");
                                }}
                                className="text-black hover:bg-muted"
                              >
                                Update
                              </p> */}
                              <UpdateCard data={data} item={item} setData={setData}/>
                              {/* <p className="text-destructive hover:bg-muted">
                                Delete
                              </p> */}
                              <DeleteCard data={data} item={item} setData={setData}/>
                            </div>
                          </PopoverContent>
                        </Popover>
  )
}

export default CustomPopOver