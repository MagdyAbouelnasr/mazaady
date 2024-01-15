"use client";
import ProfileCard from "@/components/ProfileCard";
import Header from "@/components/header";
import { AppShell } from "@mantine/core";

export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="xl">
      <AppShell.Header>
        <Header></Header>
      </AppShell.Header>

      <AppShell.Main
        className="
        grid grid-cols-1 
        md:grid-cols-2 
        gap-4 bg-gray-50 mt-4"
      >
        <div className="grid grid-cols-1 gap-6">
          <ProfileCard />
          <QrCodeCard />
        </div>
        <div>
          <ProfileCard />
        </div>
      </AppShell.Main>
    </AppShell>
  );
}
