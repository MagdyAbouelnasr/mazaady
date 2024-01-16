"use client";

import ListsCard from "@/components/ListsCard";
import MyForm from "@/components/MyForm";
import ProfileCard from "@/components/ProfileCard";
import QrCodeCard from "@/components/QrCodeCard";
import Header from "@/components/header";

import { AppShell } from "@mantine/core";
import { useState } from "react";

export default function Home() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  return (
    <AppShell header={{ height: 60 }} padding="xl">
      <AppShell.Header>
        <Header onSearchIconClick={toggleForm}></Header>
      </AppShell.Header>
      <AppShell.Main>
        {isFormVisible && <MyForm />}
        <div
          className="
            grid grid-cols-1 
            lg:grid-cols-[1.5fr_2fr] 
            gap-4 bg-gray-50 mt-4"
        >
          <div className="grid grid-cols-1 gap-6">
            <ProfileCard />
            <QrCodeCard />
          </div>
          <div>
            <ListsCard />
          </div>
        </div>
      </AppShell.Main>
    </AppShell>
  );
}
