import React, {  } from "react";
import '../css/CollapsedNavbar.css';
import Logo from '../resources/Logomark.svg';
import Avatar from '../resources/Avatar.svg'
import { IconLayoutCollage, IconLogout, IconBasketCheck, IconSettings2, IconSearch, IconUsers, IconClipboardData, IconWorld, IconMessageCircle, IconDatabaseExport } from '@tabler/icons-react';

function CollapsedNavbar() {
    return (
        <div className="collapsedNavbar">
            <div className="logomark">
                <img src={Logo} alt="Logo" />
            </div>
            <div>
                <div className="item search-bar-small" >
                    <div className="search-small">
                        <IconSearch size={16} color="#7D7D7D" />
                    </div>
                </div>
                <div className="item">
                    <IconLayoutCollage size={16} color="#FFA500" />
                </div>

                <div className="item">
                    <IconUsers size={16} color="#7D7D7D" />
                </div>

                <div className="item">
                    <IconClipboardData size={16} color="#7D7D7D" />
                </div>
                <div className="item">
                    <IconWorld size={16} color="#7D7D7D" />
                </div>
                <div className="item ">
                    <IconMessageCircle size={16} color="#7D7D7D" />
                </div>
                <div className="item">
                    <IconBasketCheck size={16} color="#7D7D7D" />
                </div>
                <div className="item">
                    <IconDatabaseExport size={16} color="#7D7D7D" />
                </div>
            </div>

            <div className="footer-small">
                <div className=" footer-item user">
                    <img src={Avatar} alt="" />
                </div>
                <div className="footer-item">
                    <IconSettings2 size={16} color="#7D7D7D" />
                </div>
                <div className="footer-item red">
                    <IconLogout size={16} />
                </div>
            </div>
        </div >
    );
}

export default CollapsedNavbar; 