import React, { useState } from "react";
import { Card, Image, Badge, Button } from "@mantine/core";
import {
  ArrowDownOnSquareStackIcon,
  EyeIcon,
  ShareIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

function QrCodeCard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Card className="flex flex-col items-center p-4" radius="lg">
      {/* Card Header */}
      <div className="w-full flex justify-between items-center mb-4">
        <p className="text-lg font-semibold">QR CODE</p>
        <div className="flex items-center">
          <EyeIcon className="h-7 w-7 mx-1 cursor-pointer" />
          <ShareIcon className="h-7 w-7 mx-1 cursor-pointer" />
          <ArrowDownOnSquareStackIcon className="h-7 w-7 mx-1 cursor-pointer" />
          {/* Collapse Button for small screens */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="md:hidden h-7 w-7 mx-1 cursor-pointer"
          >
            {isCollapsed ? <ChevronDownIcon /> : <ChevronUpIcon />}
          </button>
        </div>
      </div>
      {/* Collapsible Content */}
      <div className={`${isCollapsed ? "hidden" : ""}`}>
        {/* Badge Section */}
        <Badge
          className="flex flex-row items-center py-2 px-4 rounded-lg mb-8 mt-4"
          variant="light"
          h={42}
          w={400}
          color="orange"
          leftSection={<ArrowDownOnSquareStackIcon className="h-7 w-7 " />}
        >
          <span className="text-black font-medium">
            Download the QR code or share it with your friends.
          </span>
        </Badge>

        {/* Content Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 p-4 w-4/5 rounded-lg ml-12">
          <div className="bg-white p-8 shadow-md rounded-lg flex flex-col items-center">
            <div className="text-center">
              <div className="w-full flex justify-center mb-3">
                <Image src="company-logo.jpg" w={140} alt="Company Logo" />
              </div>
              <p className="mb-2 mt-2">Ali Ahmed</p>
              <div className="w-full flex justify-center">
                <Image src="qrcode.jpg" w={160} alt="QR Code" />
              </div>
            </div>
            {/* Footer Text */}
            <div className="text-center mt-4">
              <p className="text-md font-semibold">Follow Us On Mazaady</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default QrCodeCard;