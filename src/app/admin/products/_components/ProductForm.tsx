"use client"

import { Label  } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { formatCurrency } from "@/db/formatters"
import { Button } from "@/components/ui/button"

export function ProductForm() {
const [priceInCents, setPriceInCents] = useState<number>()


    return <form action className="space-y-8">
        <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input name="name" id="name" type="text" required/> 
        </div>
        <div className="space-y-2">
            <Label htmlFor="priceInCents">Price In Cents</Label>
            <Input name="priceInCents" id="priceInCents" type="number" required value={priceInCents} onChange={e => setPriceInCents(Number(e.target.value) || undefined)}/> 
            <div className="text-muted-foreground">{formatCurrency(priceInCents || 0 / 100 )}</div>
        </div>
        <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea name="description" id="description"  required/> 
        </div>
        <div className="space-y-2">
            <Label htmlFor="file">File</Label>
            <Input name="file" id="file" type="file" required/> 
        </div>
        <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input name="image" id="image" type="file" required/> 
        </div>
        <Button type="submit">Save</Button>
    </form>
}

 