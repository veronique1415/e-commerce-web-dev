"use client"

import { Label  } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { formatCurrency } from "@/db/formatters"
import { Button } from "@/components/ui/button"
import { addProducts } from "../../_actions/products"
import { useFormStatus, useFormState } from "react-dom"

export function ProductForm() {
 const [error, action] = useFormState(addProducts, {})
const [priceInCents, setPriceInCents] = useState<number>()


    return <form action={action} className="space-y-8">
        <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input name="name" id="name" type="text" required/>
            {error.name && <div className="text-destructive">{error.name}</div>} 
        </div>
        <div className="space-y-2">
            <Label htmlFor="priceInCents">Price In Cents</Label>
            <Input name="priceInCents" id="priceInCents" type="number" required value={priceInCents} onChange={e => setPriceInCents(Number(e.target.value) || undefined)}/> 
            <div className="text-muted-foreground">{formatCurrency((priceInCents || 0) / 100 )}</div>
            {error.priceInCents && <div className="text-destructive">{error.priceInCents}</div>} 

        </div>
        <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea name="description" id="description"  required/> 
            {error.description && <div className="text-destructive">{error.description}</div>} 

        </div>
        <div className="space-y-2">
            <Label htmlFor="file">File</Label>
            <Input name="file" id="file" type="file" required/> 
            {error.file && <div className="text-destructive">{error.file}</div>} 

        </div>
        <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input name="image" id="image" type="file" required/> 
            {error.image && <div className="text-destructive">{error.image}</div>} 

        </div>
        <SubmitButton />
    </form>
}


function SubmitButton() {
    const {pending} = useFormStatus()
    return <Button type="submit" disabled={pending}>{pending ? "Saving...": "Save"}</Button>
}
 