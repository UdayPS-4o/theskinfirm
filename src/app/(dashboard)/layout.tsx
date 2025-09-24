"use client"

import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Package, Plus, Settings, List, FolderPlus, Edit } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const dashboardNavItems = [
  {
    title: "Services",
    icon: Package,
    items: [
      {
        title: "Add Service",
        href: "/manage-services/add",
        icon: Plus,
      },
      {
        title: "View Services",
        href: "/manage-services",
        icon: List,
      },
    ],
  },
  {
    title: "Categories",
    icon: Settings,
    items: [
      {
        title: "Add Category",
        href: "/manage-services/categories/add",
        icon: FolderPlus,
      },
      {
        title: "Edit Categories",
        href: "/manage-services/categories",
        icon: Edit,
      },
    ],
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b border-border p-4">
            <h2 className="text-lg font-semibold">Dashboard</h2>
          </SidebarHeader>
          <SidebarContent className="p-4">
            <SidebarMenu>
              {dashboardNavItems.map((section) => (
                <div key={section.title} className="mb-6">
                  <div className="flex items-center gap-2 mb-2 px-2 text-sm font-medium text-muted-foreground">
                    <section.icon className="h-4 w-4" />
                    {section.title}
                  </div>
                  {section.items.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.href}
                      >
                        <Link href={item.href} className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          {item.title}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </div>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="h-4 w-px bg-border" />
            <h1 className="text-lg font-semibold">Management Dashboard</h1>
          </header>
          <main className="flex-1 p-6">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}