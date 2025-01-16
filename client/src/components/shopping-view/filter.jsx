import React, { Fragment } from "react";
import { filterOptions } from "@/config";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

export default function ProductFilter({filters, handleFilter}) {
  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-extrabold">Filters</h2>
      </div>
      <div className="p-4 space-y-4">
        {Object.keys(filterOptions).map((keyItems) => (
          <Fragment key={keyItems}>
            <div>
              <h3 className="text-base font-bold">{keyItems}</h3>
              <div className="grid gap-2 mt-2">
                {filterOptions[keyItems].map((option) => (
                  <Label
                    key={option.id}
                    className="flex items-center gap-2 font-medium"
                  >
                    <Checkbox checked={
                      filters && Object.keys(filters).length>0&&filters[keyItems]&&filters[keyItems].indexOf(option.id)!==-1?true:false
                    }
                      onCheckedChange={() => handleFilter(keyItems, option.id)}
                    />
                    <span>{option.label}</span>
                  </Label>
                ))}
              </div>
            </div>
            <Separator />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
