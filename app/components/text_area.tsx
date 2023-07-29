"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  PaperClipIcon,
  TagIcon,
  UserCircleIcon
} from "@heroicons/react/20/solid";

const assignees = [
  { name: "Unassigned", value: null },
  {
    name: "Wade Cooper",
    value: "wade-cooper",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
  // More items...
];
const labels = [
  { name: "Unlabelled", value: null },
  { name: "Engineering", value: "engineering" }
  // More items...
];
const dueDates = [
  { name: "No due date", value: null },
  { name: "Today", value: "today" }
  // More items...
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface TextAreaProps {
  setDescription: (value: string) => void;
}

export function TextArea({ setDescription }: TextAreaProps) {
  return (
    <div className="flex justify-center">
      <div className="w-8/12 overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        {/* <label htmlFor="title" className="sr-only">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0"
          placeholder="Title"
        /> */}
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <textarea
          rows={4}
          name="description"
          id="description"
          className="block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pt-4"
          placeholder="Write a description..."
          defaultValue={""}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Spacer element to match the height of the toolbar */}
      </div>
    </div>
  );
}
