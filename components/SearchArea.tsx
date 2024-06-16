"use client";

import React from "react";
import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { places } from "./data";

export default function SearchArea() {
  return (
    <Autocomplete
   
      classNames={{
        base: "max-w-md w-full", // Increased width here
        listboxWrapper: "max-h-[320px]",
        selectorButton: "text-default-500",
      }}
      defaultItems={places}
      inputProps={{
        classNames: {
          input: "ml-1",
          inputWrapper: "h-[48px]",
        },
      }}
      listboxProps={{
        hideSelectedIcon: true,
        itemClasses: {
          base: [
            "rounded-medium",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "dark:data-[hover=true]:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[hover=true]:bg-default-200",
            "data-[selectable=true]:focus:bg-default-100",
            "data-[focus-visible=true]:ring-default-500",
          ],
        },
      }}
      aria-label="Search for Tours | Activities | Treks | Places"
      placeholder="Search for tours, activities, and places"
      popoverProps={{
        offset: 10,
        classNames: {
          base: "rounded-large",
          content: "p-1 border-small border-default-100 bg-background",
        },
      }}
      startContent={<SearchIcon className="text-default-400" strokeWidth={2.5} size={20} width={undefined} height={undefined} />}
      radius="full"
      variant="bordered"
    >
      {(item) => (
        <AutocompleteItem key={item.id} textValue={item.name}>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
            
              <div className="flex flex-col">
                <span className="text-small">{item.name}</span>
              </div>
            </div>
            <Button
              className="border-small mr-0.5 font-medium shadow-small"
              radius="full"
              size="sm"
              variant="bordered"
            >
            Explore Now
            </Button>
          </div>
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
