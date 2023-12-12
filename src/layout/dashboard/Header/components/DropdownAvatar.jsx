import React from 'react'
import { Link } from 'react-router-dom';

import { PiSignOutBold, PiUserBold } from "react-icons/pi";

export const DropdownAvatar = ({ showOptions, setShowOptions }) => {
    const closeDropdown = () => {
        setShowOptions(false);
    };

    return (
        <>
            {showOptions && (
                <>
                    {/* cierra el dropdown cuando se hace click fuera de el */}
                    <div onClick={closeDropdown} className="fixed inset-0 h-full w-full z-10"></div>

                    <div className="absolute right-0 mt-12 w-56 bg-white rounded-md overflow-hidden shadow-xl z-20">
                        <header className='bg-gradient-to-r from-rose-400 to-red-500 text-center py-2'>
                            <h1 className='text-white'>Juan Pablo Marin</h1>
                            <p>Administrador</p>
                        </header>
                        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <main className='bg-white'>
                            <ul>
                                {/* link para mi cuenta */}
                                <li>
                                    <Link
                                        to="/"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        <PiUserBold className='inline-block mr-2 text-xl' />
                                        Mi cuenta
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        <PiSignOutBold className='inline-block mr-2 text-xl' />
                                        Cerrar sesion
                                    </Link>
                                </li>
                            </ul>
                        </main>
                    </div>
                </>
            )}
        </>
    );
}