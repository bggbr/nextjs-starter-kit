import React from "react";

export default function Banner({ isButton }: { isButton: boolean }) {
    return (
        <>
            {isButton && (
                <div className='flex items-center justify-center rounded-xl bg-green-300 max-w-lg my-4 text-center h-12 mx-auto font-semibold text-xl'>
                    ✅ 전송 완료!!
                </div>
            )}
        </>
    );
}
