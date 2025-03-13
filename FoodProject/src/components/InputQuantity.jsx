import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const InputQuantity = ({ value, onIncrement, onDecrement, onChange }) => {
    return (
        <div className="flex items-center gap-2 bg-primary_brown/20 p-2 rounded-lg w-fit">
            <button
                onClick={onDecrement}
                className="w-8 h-8 flex items-center justify-center rounded-md bg-primary_brown text-primary_yellow hover:bg-primary_brown/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={value <= 1}
            >
                <Minus className="w-4 h-4" />
            </button>

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e)}
                className="w-12 text-center bg-transparent text-primary_yellow font-semibold focus:outline-none"
            />

            <button
                onClick={onIncrement}
                className="w-8 h-8 flex items-center justify-center rounded-md bg-primary_brown text-primary_yellow hover:bg-primary_brown/80 transition-colors"
            >
                <Plus className="w-4 h-4" />
            </button>
        </div>
    );
};

export default InputQuantity;
