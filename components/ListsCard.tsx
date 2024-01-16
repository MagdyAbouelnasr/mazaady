import React, { useState } from "react";
import { Button, Group } from "@mantine/core";
import ListItem from "./ListItem"; // Import the ListItem component
import { PlusCircleIcon } from "@heroicons/react/24/outline";

function ListsCard() {
  const [activeTab, setActiveTab] = useState("products"); // State to track active tab

  // Dummy data for list items
  const listItems = [
    {
      name: "Item 1",
      startingPrice: "100",
      imageUrl: "product.png",
      days: 2,
      hours: 3,
      minutes: 30,
      isFavorited: false,
    },
    {
      name: "Item 1",
      startingPrice: "100",
      imageUrl: "product.png",
      days: 2,
      hours: 3,
      minutes: 30,
      isFavorited: true,
    },
    {
      name: "Item 1",
      startingPrice: "100",
      imageUrl: "product.png",
      days: 2,
      hours: 3,
      minutes: 30,
      isFavorited: false,
    },
    // ... more items
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between">
        <Group wrap="nowrap">
          <Button
            variant="light"
            color={activeTab === "products" ? "orange" : "gray"}
            onClick={() => setActiveTab("products")}
          >
            Products
          </Button>
          <Button
            variant="light"
            color={activeTab === "articles" ? "orange" : "gray"}
            onClick={() => setActiveTab("articles")}
          >
            Articles
          </Button>
          <Button
            variant="light"
            color={activeTab === "reviews" ? "orange" : "gray"}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </Button>
        </Group>
        <button
          type="button"
          className="flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500 hover:from-pink-500 hover:to-yellow-500 mr-4 ml-4 w-48 h-12 rounded hidden hidden sm:flex"
        >
          <PlusCircleIcon stroke="white" className="w-6 h-6 ml-1" />
          <span className="ml-2 text-white">Add Review</span>
        </button>
      </div>
      <h2 className="text-lg font-semibold mt-4 mb-2">
        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </h2>
      <div>
        {listItems.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ListsCard;
