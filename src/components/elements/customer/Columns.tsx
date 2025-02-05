import { Link } from "react-router-dom";
import moment from "moment";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronsUpDown, Ellipsis, Eye, PenTool, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IUserInfo } from "@/interface";
import { consumerLists, deleteConsumer } from "@/services/consumer.services.ts";

const deleteFunc = async (delId: string) => {
  await deleteConsumer(delId);
  await consumerLists();
};

export const customerColumns: ColumnDef<IUserInfo>[] = [
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
    accessorKey: "phone",
    header: "Phone no.",
    cell: ({ row }) => (
      <div className="capitalize font-semibold">{row.getValue("phone")}</div>
    ),
  },
  {
    header: "Address",
    cell: ({ row }) => (
      <div className="capitalize font-semibold">
        {row.original.address.area}, {row.original.address.landmark} - &nbsp;
        {row.original.address.pincode}
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
    cell: ({ row }) => {
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
                  to={`view/${row.original._id}`}
                  className="flex items-center font-semibold text-xs"
                >
                  <Eye className="mr-2" />
                  View Details
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to={`edit/${row.original._id}`}
                  className="flex items-center font-semibold text-xs"
                >
                  <PenTool className="mr-2" />
                  Edit Information
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => deleteFunc(row.original._id)}
                className="flex items-center font-semibold text-xs text-red-500 focus:text-red-500"
              >
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
