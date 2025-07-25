import React, { useState } from "react";

const TrainingNotice = () => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="hidden sm:flex bg-black text-white border border-gray-700 rounded-lg shadow-md p-4 justify-between items-center max-w-[78rem] mx-auto mb-4 px-6 font-semibold">
            {/* Left Text */}
            <p className="text-sm sm:text-base font-medium">
                "Level up your career — start learning with SkillElevate
            </p>

            {/* Right Button */}
            <button
                onClick={() => setVisible(false)}
                className="bg-white hover:bg-gray-100 text-black font-semibold py-1.5 px-4 rounded ml-4"
            >
                Dismiss
            </button>
        </div >
    );
};

export default TrainingNotice;
