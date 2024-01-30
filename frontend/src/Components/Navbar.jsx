import React from "react";
import '../App.css';
import Logo from '../resources/Logo.svg';
import Avatar from '../resources/Avatar.svg'
import { IconLayoutCollage, IconLogout, IconBasketCheck, IconSettings2, IconChevronDown, IconChevronUp, IconSearch, IconUsers, IconClipboardData, IconWorld, IconMessageCircle, IconDatabaseExport } from '@tabler/icons-react';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div>
                <div className="items search-bar" >
                    <div className="search">
                        <IconSearch size={16} color="#7D7D7D" />
                        <div className="text">Search</div>
                    </div>
                </div>
                <div className="items">
                    <IconLayoutCollage size={16} color="#7D7D7D" />
                    <div className="text">Dashboard</div>
                </div>
                <div className="items options">
                    <IconUsers size={16} color="#7D7D7D" />
                    <div className="text">Customers</div>
                    <IconChevronDown className="drop" size={16} />
                </div>
                <div className="items">
                    <IconClipboardData size={16} color="#7D7D7D" />
                    <div className="text">All Reports</div>
                </div>
                <div className="items">
                    <IconWorld size={16} color="#7D7D7D" />
                    <div className="text">Geography</div>
                </div>
                <div className="items ">
                    <IconMessageCircle size={16} color="#7D7D7D" />
                    <div className="text">Conversations</div>
                </div>
                <div className="items">
                    <IconBasketCheck size={16} color="#7D7D7D" />
                    <div className="text">Deals</div>
                </div>
                <div className="items">
                    <IconDatabaseExport size={16} color="#7D7D7D" />
                    <div className="text">Export</div>
                </div>
            </div>

            <div className="footer">
                <div className=" footer-items user">
                    <img src={Avatar} alt="" />
                    <div className="details text">
                        <div className="name">Kinshu Jain</div>
                        <div className="title">Admin</div>
                    </div>
                </div>
                <div className="footer-items">
                    <IconSettings2 size={16} color="#7D7D7D" />
                    <div className="text">Settings</div>
                </div>
                <div className="footer-items red">
                    <IconLogout size={16} />
                    <div className="text">Log out</div>
                </div>
            </div>
        </div>
    );
}

export default Navbar; 