import { useState } from "react"

interface Args {
    data: { x: number, y: number }
}

export default function SelectionBox(args: Args) {
    const { x, y } = args.data;
    const [newPositins, setNewPositions] = useState({ x, y });

    return (
        <div className="selectionBox"></div>
    )
}