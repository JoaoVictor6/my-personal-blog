import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function LanguageSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[80px]">
        <SelectValue placeholder="PT" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Soon...</SelectLabel>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
