import React, { useState } from 'react'
import './shopDownSection.scss'
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

function ShopDownSection() {
    const [filterOpen, setFilterOpen] = useState(false)
    const [filterMenu, setFilterMenu] = useState(false)

    function handleFilterOpen() {
        setFilterOpen(!filterOpen)
    }

    function handleFilterMenu() {
        setFilterMenu(!filterMenu)
    }

    return (
        <section id='shopDownSection'>
            <div className="filterUpBox">
                <div className="filterLefBox">
                    <CiFilter style={{ fontSize: "35px" }} />
                    <h3>FILTER</h3>
                </div>
                <div className="filterRightBox">
                    <div className={`filterMenusNumberBox ${filterMenu ? "isOpenMenu" : ""}`}>
                        <div className="filterMenuNumber">2</div>
                        <div className="filterMenuNumber">3</div>
                        <div className="filterMenuNumber">4</div>
                        <div className="filterMenuNumber">5</div>
                    </div>
                    <div className="filterMenuBox" onClick={handleFilterMenu}>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>

                    <div className="filterSelectBox">
                        <div className='filterSelect' onClick={handleFilterOpen}>
                            Featured
                            <IoIosArrowDown style={{ fontSize: "15px" }} />
                            <div className={`openFilterBox ${filterOpen ? "openFilter" : ""}`}>
                                <p>Featured</p>
                                <p>Best Selling</p>
                                <p>Alphabetically, A-Z</p>
                                <p>Price, high to low</p>
                                <p>Price, low to high</p>
                                <p>Date, old to new</p>
                                <p>Date, new to old</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopDownSection