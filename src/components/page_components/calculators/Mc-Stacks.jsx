import React, { useState } from "react";

function MCStacks() {
    const [mode, setMode]             = useState("toStacks");
    const [stackSize, setStackSize]   = useState(16);
    const [totalItems, setTotalItems] = useState();
    const [stacks, setStacks]         = useState();
    const [leftover, setLeftover]     = useState();
    const [result, setResult]         = useState();

    const calculateToStacks = () => {
        const items = parseInt(totalItems, 10);

        if(isNaN(items) || items < 0) {
            setResult("Please enter a non-negative number of items");
            return;
        }
        const stacks = Math.floor(items / stackSize);
        const remain = items % stackSize;

        let output = `${stacks} stacks/s`;
        if(remain !== 0) output += ` and ${remain} item/s`;
        setResult(output);
    };

    const calculateToDecimal = () => {
        const sta = parseInt(stacks, 10);
        const rem = parseInt(leftover, 10);

        if(isNaN(sta) || isNaN(rem) || sta < 0 || rem < 0) {
            setResult("Please enter a non-negative number of items");
            return;
        }
        if(stackSize !== 16 && stackSize !== 64) {
            setResult("Total stack size must be only 16 or 64.");
            return;
        }
        const total = sta * stackSize + rem;
        setResult(`Total of ${total} item/s.`);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        if(mode === "toStacks")        calculateToStacks();
        else if(mode === "toDecimal") calculateToDecimal();
    }

    return (
        <section>
            <div className="container-sm">
                <p>Minecraft Stacks Converter</p>
                <label>
                    Mode:
                    <select value={mode} onChange={(event) => setMode(event.target.value)}>
                        <option value="toStacks"  >Items to Stacks</option>
                        <option value="toDecimal">Stacks to Items</option>
                    </select>
                </label>
                <label>
                    Stack Size:
                    <select value={stackSize} onChange={(event) => setStackSize(parseInt(event.target.value))}>
                        <option value={16}>16 items/stack</option>
                        <option value={64}>64 items/stack</option>
                    </select>
                </label>
                <form onSubmit={handleSubmit}>
                    {mode === "toStacks" ? (
                        <label>
                            Total Items:
                            <input type="number" value={totalItems} onChange = {(event) => setTotalItems(event.target.value)}/>
                        </label>
                    ) : (
                        <>
                            <label>
                                Stack:
                                <input type="number" value={stacks} onChange = {(event) => setStacks(event.target.value)}/>
                            </label>
                            <label>
                                Leftover:
                                <input type="number" value={leftover} onChange = {(event) => setLeftover(event.target.value)}/>
                            </label>
                        </>
                    )}
                    <button type="submit"> Calculate </button>
                </form>
                {result && (
                    <div>
                        Result: {result}
                    </div>
                )}
            </div>
        </section>
    );
}
export default MCStacks