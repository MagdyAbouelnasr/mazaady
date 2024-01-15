"use client"

import Header from "@/components/header";

import { AppShell } from "@mantine/core";

export default function Home() {
  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Header></Header>
      </AppShell.Header>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}
