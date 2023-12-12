import React from 'react'

export const Footer = () => {
    return (
        <div className="w-full">

            <footer className="p-4 shadow shadow-white md:flex md:items-center md:justify-between md:p-6 text-white">
                <span className="text-sm  sm:text-center ">© 2023 By Juan Pablo Marin - Distribuido Por STF GROUP S.A
                </span>
                <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 text-sm  hover:underline md:mr-6">Politica
                            Privacidad</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm  hover:underline">Contacto</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}
