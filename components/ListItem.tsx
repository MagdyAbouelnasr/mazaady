import React from "react";
import { Image, Badge } from "@mantine/core";
import { HeartIcon } from "@heroicons/react/24/outline";

function ListItem({
  name,
  startingPrice,
  imageUrl,
  days,
  hours,
  minutes,
  isFavorited,
}: any) {
  return (
    <div className="flex items-start p-2">
      <div className="relative mr-3">
        <Image
          src={imageUrl}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <HeartIcon
          className="h-6 w-6 text-red-500 cursor-pointer absolute top-0 left-0 sm:invisible"
          style={{
            fill: isFavorited ? "red" : "none",
            color: isFavorited ? "red" : "currentColor",
          }}
        />
      </div>
      <div className="flex-grow mt-2">
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm mt-2 text-gray-600">
              Starting Price {startingPrice}
            </p>
          </div>
          <HeartIcon
            className="h-6 w-6 text-red-500 hidden sm:block"
            style={{
              fill: isFavorited ? "red" : "none",
              color: isFavorited ? "red" : "currentColor",
            }}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <span className="text-sm mr-2 mt-2 sm:mt-0">Lot Starts in</span>
          <div className="flex flex-wrap">
            <Badge
              variant="light"
              color="orange"
              className="mr-2 mb-2 mt-2 badge-xs bg-orange-200 rounded-xl "
              radius={20}
              h={44}
              w={74}
            >
              <span className="text-lg">{days}d</span>
            </Badge>
            <Badge
              variant="light"
              color="orange"
              className="mr-2 mb-2 mt-2 badge-xs bg-orange-200
rounded-xl"
              radius={20}
              h={44}
              w={74}
            >
              <span className="text-lg">{hours}h</span>
            </Badge>
            <Badge
              variant="light"
              color="orange"
              className="mb-2 mt-2 badge-xs bg-orange-200 rounded-xl"
              radius={20}
              h={44}
              w={74}
            >
              <span className="text-lg">{minutes}m</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
