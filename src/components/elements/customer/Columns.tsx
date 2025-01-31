import { Link } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronsUpDown, Ellipsis, Eye, PenTool, Trash2 } from "lucide-react";

import { IUserInfo } from "@/interface";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const customerColumns: ColumnDef<IUserInfo>[] = [
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
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <span
          className="flex items-center cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </span>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize font-semibold">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <span
          className="flex items-center cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </span>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phoneNo",
    header: "Phone no.",
    cell: ({ row }) => (
      <div className="capitalize font-semibold">{row.getValue("phoneNo")}</div>
    ),
  },
  {
    accessorKey: "eventDate",
    header: "Event Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("eventDate")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-semibold">{formatted}</div>;
    },
  },
  {
    accessorKey: "activeUser",
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
      const emailVerify = row.getValue("activeUser")
        ? "Verified"
        : "Not verified";
      return (
        <div
          className={`${
            emailVerify === "Verified"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          } inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold text-foreground`}
        >
          <span
            className={`${
              emailVerify === "Verified" ? "bg-green-700" : "bg-red-700"
            } h-[6px] w-[6px] rounded-full mr-[6px]`}
          ></span>
          {emailVerify}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const name = row.getValue("name");
      console.log(name);
      return (
        <div className="text-right font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <Ellipsis className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link
                  to={"/"}
                  className="flex items-center font-semibold text-xs"
                >
                  <Eye className="mr-2" />
                  View Details
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to={"/"}
                  className="flex items-center font-semibold text-xs"
                >
                  <PenTool className="mr-2" />
                  Edit Information
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center font-semibold text-xs text-red-500 focus:text-red-500">
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
