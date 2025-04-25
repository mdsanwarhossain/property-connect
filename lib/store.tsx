"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { Property } from "./types"
import { initialProperties } from "./data"

interface PropertyContextType {
  properties: Property[]
  addProperty: (property: Property) => void
  updateProperty: (property: Property) => void
  deleteProperty: (id: number) => void
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined)

export function PropertyProvider({ children }: { children: ReactNode }) {
  const [properties, setProperties] = useState<Property[]>(initialProperties)

  const addProperty = (property: Property) => {
    setProperties((prev) => [...prev, property])
  }

  const updateProperty = (property: Property) => {
    setProperties((prev) => prev.map((p) => (p.id === property.id ? property : p)))
  }

  const deleteProperty = (id: number) => {
    setProperties((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <PropertyContext.Provider value={{ properties, addProperty, updateProperty, deleteProperty }}>
      {children}
    </PropertyContext.Provider>
  )
}

export function usePropertyContext() {
  const context = useContext(PropertyContext)
  if (context === undefined) {
    throw new Error("usePropertyContext must be used within a PropertyProvider")
  }
  return context
}
