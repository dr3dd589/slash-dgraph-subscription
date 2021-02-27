import React from "react"
import { AppHeader } from "./header"
import { AddContact } from "./contact"

export function Home() {
    return (
        <div>
            {AppHeader()}
            {AddContact()}
        </div>
    )
}
