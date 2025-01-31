import { ColumnDef } from "@tanstack/react-table";
import { ChevronsUpDown, Ellipsis, Eye, PenTool, Trash2 } from "lucide-react";

import { IGameInfo } from "@/interface";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function getInitials(name: string) {
  const words = name.split(" ");
  const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
  return initials;
}

export const vendorsColumns: ColumnDef<IGameInfo>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "game_name",
    header: ({ column }) => {
      return (
        <span
          className="flex items-center cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Game name
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </span>
      );
    },
    cell: ({ row }) => {
      const initials = getInitials(row.getValue("game_name"));
      return (
        <div className="flex items-center">
          <Avatar className="mr-3">
            <AvatarFallback className="font-semibold text-xs">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="capitalize font-semibold">
            {row.getValue("game_name")}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "game_id",
    header: "Game ID",
    cell: ({ row }) => (
      <div className="capitalize font-semibold">{row.getValue("game_id")}</div>
    ),
  },
  {
    accessorKey: "client_id",
    header: "Client ID",
    cell: ({ row }) => (
      <div className="capitalize font-semibold">
        {row.getValue("client_id")}
      </div>
    ),
  },
  {
    accessorKey: "genre",
    header: ({ column }) => {
      return (
        <span
          className="flex items-center cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Genre
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </span>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("genre")}</div>
    ),
  },
  {
    accessorKey: "create_date",
    header: "Create Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("create_date")}</div>
    ),
  },
  {
    accessorKey: "bundle_price",
    header: () => <div className="text-left">Wallet amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("bundle_price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="font-semibold">{formatted}</div>;
    },
  },
  {
    accessorKey: "active_status",
    header: ({ column }) => {
      return (
        <span
          className="flex items-center cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </span>
      );
    },
    cell: ({ row }) => {
      const verifyStatus = row.getValue("active_status")
        ? "Verified"
        : "Not verified";
      return (
        <div
          className={`${
            verifyStatus === "Verified"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          } inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold text-foreground`}
        >
          <span
            className={`${
              verifyStatus === "Verified" ? "bg-green-700" : "bg-red-700"
            } h-[6px] w-[6px] rounded-full mr-[6px]`}
          ></span>
          {verifyStatus}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <div className="text-right font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <Ellipsis className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="flex items-center font-semibold text-xs">
                <Eye />
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center font-semibold text-xs">
                <PenTool />
                Edit Information
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center font-semibold text-xs">
                <Trash2 />
                Delete Customer
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
