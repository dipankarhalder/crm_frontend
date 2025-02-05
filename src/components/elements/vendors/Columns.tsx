import { Link } from "react-router-dom";
import moment from "moment";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronsUpDown, Ellipsis, Eye, PenTool, Trash2 } from "lucide-react";
import { IVendorInfo } from "@/interface";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const colorArr = ["bg-indigo-500", "bg-rose-500", "bg-amber-500"];

function getInitials(name: string) {
  const words = name.split(" ");
  const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
  return initials;
}

function shuffleArray(arr: any) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export const vendorsColumns: ColumnDef<IVendorInfo>[] = [
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
    cell: ({ row }) => {
      const initials = getInitials(row.getValue("name"));
      return (
        <div className="flex items-center">
          <Avatar className="mr-3">
            <AvatarFallback
              className={`font-semibold text-xs text-white ${shuffleArray(
                colorArr
              )}`}
            >
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="capitalize font-semibold">{row.getValue("name")}</div>
        </div>
      );
    },
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
    accessorKey: "phone",
    header: "Phone no.",
    cell: ({ row }) => (
      <div className="capitalize font-semibold">{row.getValue("phone")}</div>
    ),
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <span
          className="flex items-center cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Role
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </span>
      );
    },
    cell: ({ row }) => (
      <div className="flex">
        {row.getValue("role") === "super_admin" ? (
          <div className="capitalize text-xs font-semibold bg-green-200 text-green-900 py-1 px-2 rounded-md">
            {row.getValue("role")}
          </div>
        ) : row.getValue("role") === "collaborator" ? (
          <div className="capitalize text-xs font-semibold bg-blue-200 text-blue-900 py-1 px-2 rounded-md">
            {row.getValue("role")}
          </div>
        ) : (
          <div className="capitalize text-xs font-semibold bg-amber-200 text-amber-900 py-1 px-2 rounded-md">
            {row.getValue("role")}
          </div>
        )}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => (
      <div className="capitalize font-semibold">
        {moment(row.getValue("createdAt")).format("ll")}
      </div>
    ),
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
                <Ellipsis className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="flex items-center font-semibold text-xs">
                <Link
                  to={"/"}
                  className="flex items-center font-semibold text-xs"
                >
                  <Eye className="mr-2" />
                  View Details
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center font-semibold text-xs">
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
                Delete Vendor
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
