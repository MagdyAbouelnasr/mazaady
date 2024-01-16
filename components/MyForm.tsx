"use client";

import React, { useState, useEffect } from "react";
import { Card, Select, TextInput } from "@mantine/core";
import DataTable from "./DataTable";

const privateKey = "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16";
const CUSTOM_OPTION_ID = -1;

function MyForm() {
  const [tableData, setTableData] = useState<TableData | null>(null);


  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [selectedMainCategory, setSelectedMainCategory] = useState<
    number | null
  >(null);

  const [subCategories, setSubCategories] = useState<Category[]>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<number | null>(
    null
  );

  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: number;
  }>({});
  const [childProperties, setChildProperties] = useState<{
    [key: number]: Property[];
  }>({});

  const [customInputs, setCustomInputs] = useState<{ [key: number]: string }>(
    {}
  );

  // Fetch main categories
  useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        const response = await fetch(
          "https://staging.mazaady.com/api/v1/get_all_cats",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "PRIVATE-KEY": privateKey,
            },
          }
        );
        const data = await response.json();
        setMainCategories(data.data.categories);
      } catch (error) {
        console.error("Error fetching main categories:", error);
      }
    };

    fetchMainCategories();
  }, []);

  // Fetch subcategories when a main category is selected
  useEffect(() => {
    const fetchSubCategories = async () => {
      if (selectedMainCategory !== null) {
        const mainCategory = mainCategories.find(
          (cat) => cat.id === selectedMainCategory
        );

        if (mainCategory && mainCategory.children) {
          setSubCategories(mainCategory.children);
        } else {
          setSubCategories([]);
        }
      } else {
        setSubCategories([]);
      }
    };

    fetchSubCategories();
  }, [selectedMainCategory, mainCategories]);

  // Fetch properties when a subcategory is selected
  useEffect(() => {
    const fetchProperties = async () => {
      if (selectedSubCategory !== null) {
        try {
          const response = await fetch(
            `https://staging.mazaady.com/api/v1/properties?cat=${selectedSubCategory}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "PRIVATE-KEY": privateKey,
              },
            }
          );
          const data = await response.json();
          setProperties(data.data);
        } catch (error) {
          console.error("Error fetching properties:", error);
        }
      }
    };

    fetchProperties();
  }, [selectedSubCategory]);

const handleSubmit = (e: any) => {
  e.preventDefault();
  // ... your logic to gather data

  const dataToDisplay: TableData = {
    mainCategory: mainCategories.find((cat) => cat.id === selectedMainCategory)
      ?.name,
    subCategory: subCategories.find((cat) => cat.id === selectedSubCategory)
      ?.name,
    properties: properties.map((property) => ({
      name: property.name,
      value:
        selectedOptions[property.id] === CUSTOM_OPTION_ID
          ? customInputs[property.id]
          : property.options.find(
              (opt) => opt.id === selectedOptions[property.id]
            )?.name,
    })),
  };

  setTableData(dataToDisplay);
};


  // Handle option change, fetch child properties if necessary
  const handleOptionChange = async (propertyId: number, optionId: number) => {
    setSelectedOptions((prev) => ({ ...prev, [propertyId]: optionId }));

    const option = properties
      .find((p) => p.id === propertyId)
      ?.options.find((o) => o.id === optionId);
    if (option?.child) {
      // Fetch child properties
      try {
        const response = await fetch(
          `https://staging.mazaady.com/api/v1/get-options-child/${optionId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "PRIVATE-KEY": privateKey,
            },
          }
        );
        const data = await response.json();
        setChildProperties((prev) => ({
          ...prev,
          [propertyId]: data.data,
        }));
        console.log("data", data);
      } catch (error) {
        console.error("Error fetching child properties:", error);
      }
    }

    if (optionId === CUSTOM_OPTION_ID) {
      // Handle custom option selection
      setCustomInputs((prev) => ({ ...prev, [propertyId]: "" }));
    } else {
      setCustomInputs((prev) => {
        const newInputs = { ...prev };
        delete newInputs[propertyId];
        return newInputs;
      });
    }
  };

  const handleCustomInputChange = (propertyId: number, value: string) => {
    setCustomInputs((prev) => ({ ...prev, [propertyId]: value }));
  };

  // Render properties and their options
  const renderProperties = (props: Property[]) => {
    return props?.map((property) => (
      <div key={property.id} className="mb-4">
        <label>{property.name}</label>
        <Select
          value={selectedOptions[property.id]?.toString()}
          onChange={(value) => handleOptionChange(property.id, Number(value))}
          data={[
            ...(property.options?.map((opt) => ({
              value: opt.id.toString(),
              label: opt.name,
            })) || []),
            { value: CUSTOM_OPTION_ID.toString(), label: "Other (specify)" }, // Add custom option
          ]}
          placeholder={`Select ${property.name}`}
        />
        {selectedOptions[property.id] === CUSTOM_OPTION_ID && (
          <TextInput
            value={customInputs[property.id] || ""}
            onChange={(event) =>
              handleCustomInputChange(property.id, event.currentTarget.value)
            }
            placeholder="from user"
            className="mt-2"
          />
        )}
        {selectedOptions[property.id] &&
          childProperties[property.id] &&
          renderProperties(childProperties[property.id])}
      </div>
    ));
  };

  return (
    <Card className="w-full shadow-xl">
      <form onSubmit={handleSubmit} className="p-4">
        <div className="mb-4">
          <Select
            value={selectedMainCategory?.toString()}
            onChange={(value) => setSelectedMainCategory(Number(value))}
            data={mainCategories?.map((category) => ({
              value: category.id.toString(),
              label: category.name,
            }))}
            placeholder="Select main category"
          />
        </div>

        <div className="mb-4">
          <Select
            value={selectedSubCategory?.toString()}
            onChange={(value) => setSelectedSubCategory(Number(value))}
            data={subCategories.map((category) => ({
              value: category.id.toString(),
              label: category.name,
            }))}
            placeholder="Select subcategory"
            disabled={!selectedMainCategory}
          />
        </div>

        {/* Render properties */}
        <div className="mb-4">{renderProperties(properties)}</div>

        <div className="text-right">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-red-600 to-orange-500 w-2/5 rounded-xl h-12"
          >
            Submit
          </button>
        </div>
      </form>
      {tableData && <DataTable data={tableData} />}
    </Card>
  );
}

export default MyForm;
