import React, { useState } from "react";

const UNITS_PER_BIT = 5;
const UNITS_PER_INGOT = 100;

function VSRatio() {
    const [type, setType]         = useState("Tin Bronze");
    const [ingots, setIngots]     = useState("");
    const [percents, setPercents] = useState({
        copper: "",
        tin: "",
        zinc: "",
        bismuth: "",
        gold: "",
        silver: "",
    });
    
    const handleChange = (metal, value) => {
        setPercents((prev) => ({
            ...prev,
            [metal]: parseInt(value, 10),
        }));
    };

    const requiredUnits = ingots * UNITS_PER_INGOT;
    const requiredBits = Math.floor(requiredUnits / UNITS_PER_BIT);

    const calculateBits = (percent) => Math.round(requiredBits * (percent / 100.0));

    const renderSliders = () => {
        switch(type) {
            case "Tin Bronze":
                return (
                    <>
                        <label>Copper ({percents.copper}%)</label>
                        <input
                            type="range"
                            min="88"
                            max="92"
                            value={percents.copper}
                            onChange={(event) => handleChange("copper", event.target.value)} />
                        <p>Tin: {100 - percents.copper}%</p>
                    </>
                );
            case "Bismuth Bronze":
                const copperPercent = 100 - percents.zinc - percents.bismuth;
                return (
                    <>
                        <label>Zinc ({percents.zinc}%)</label>
                        <input
                            type="range"
                            min="20"
                            max="30"
                            value={percents.zinc}
                            onChange={(event) => handleChange("zinc", event.target.value)} />
                        <label>Bismuth ({percents.bismuth}%)</label>
                        <input
                            type="range"
                            min="10"
                            max="20"
                            value={percents.bismuth}
                            onChange={(event) => handleChange("bismuth", event.target.value)} />
                        <p>Copper: {copperPercent}%</p>
                    </>
                );
            case "Black Bronze":
                const copperPercentB = 100 - percents.gold - percents.silver;
                return (
                    <>
                        <label>Gold ({percents.gold}%)</label>
                        <input
                            type="range"
                            min="8"
                            max="16"
                            value={percents.gold}
                            onChange={(event) => handleChange("gold", event.target.value)} />
                        <label>Silver ({percents.silver}%)</label>
                        <input
                            type="range"
                            min="10"
                            max="20"
                            value={percents.silver}
                            onChange={(event) => handleChange("silver", event.target.value)} />
                        <p>Copper: {copperPercentB}%</p>
                    </>
                );
            default:
                return <p>Select an alloy type to start.</p>;
        }
    };

    const renderResults = () => {
        if(!type) return null;

        let composition = {};
        switch(type) {
            case "Tin Bronze":
                composition = {
                    copper: calculateBits(percents.copper),
                    tin: calculateBits(100 - percents.copper)
                };
                break;
            case "Bismuth Bronze":
                composition = {
                    copper: calculateBits(100 - percents.zinc - percents.bismuth),
                    zinc: calculateBits(percents.zinc),
                    bismuth: calculateBits(percents.bismuth)
                };
                break;
            case "Black Bronze":
                composition = {
                    copper: calculateBits(100 - percents.gold - percents.silver),
                    gold: calculateBits(percents.gold),
                    silver: calculateBits(percents.silver)
                };
                break;
            default:
                return null;
        }

        return (
            <div>
                <h3>--- {type} Results ---</h3>
                <p>Total Units: {requiredUnits}</p>
                <p>Required Ore Bits: {requiredBits}</p>
                <ul>
                    {Object.entries(composition).map(([metal, bits]) => (
                        <li key={metal}>
                            {metal.charAt(0).toUpperCase() + metal.slice(1)} - {bits} bits (
                            {metal === "copper"
                                ? type === "Tin Bronze"
                                    ? percents.copper
                                    : type === "Bismuth Bronze"
                                    ? 100 - percents.zinc - percents.bismuth
                                    : 100 - percents.gold - percents.silver
                                : percents[metal]
                            }
                            %)
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <section>
            <div className="container-sm">
                <p>Bronze Ratio Calculator</p>

                <label>
                    Select alloy:
                    <select value={type}
                            onChange={(event) => {
                                setType(event.target.value);
                                setPercents({
                                    copper: "",
                                    tin: "",
                                    zinc: "",
                                    bismuth: "",
                                    gold: "",
                                    silver: "",
                                });
                            }}>
                        <option value="Tin Bronze">Tin Bronze</option>
                        <option value="Bismuth Bronze">Bismuth Bronze</option>
                        <option value="Black Bronze">Black Bronze</option>
                    </select>
                </label>

                <label>
                    How many ingots?
                    <input type="number"
                    value={ingots}
                    onChange={(event) => setIngots(event.target.value)} />
                </label>

                <div>{renderSliders()}</div>

                {renderResults()}
            </div>
        </section>
    );
}

export default VSRatio