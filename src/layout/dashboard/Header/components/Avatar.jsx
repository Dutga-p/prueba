import React, { useState } from 'react'

import { PiUserBold, PiCaretUpBold, PiCaretDownBold } from "react-icons/pi";
import { DropdownAvatar } from './DropdownAvatar';

export const Avatar = () => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <>

            {/* DESKTOP */}
            <button
                onClick={() => setShowOptions(!showOptions)}
                className='max-lg:hidden flex items-center gap-2 rounded-md active:border '
            >
                <div className='text-left'>
                    <h1 className='uppercase font-bold text-[0.8rem]'>Juan pablo marin</h1>
                    <h1 className='uppercase text-[#4c61fc] text-[0.8rem]'>Administrador</h1>
                </div>

                <PiUserBold className='text-2xl' />
                {showOptions ? <PiCaretUpBold /> : <PiCaretDownBold />}
            </button>

            {/* MOBILE */}
            <div className='lg:hidden text-2xl  py-2 px-1 rounded-md cursor-pointer hover:bg-blue-600'>
                <PiUserBold onClick={() => setShowOptions(!showOptions)}/>
            </div>


            <DropdownAvatar showOptions={showOptions} setShowOptions={setShowOptions} />
        </>
    );
}
