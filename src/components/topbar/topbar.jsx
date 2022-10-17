import React from 'react'
import useState from 'react'
import TextField from "@mui/material/TextField";

import './topbar.css'

export default function Topbar()
{
    return (
        <div>
            <div className="topbar">
                <div className="topbarwrapper">
                    <div className="topleft">
                    <img src="C:\Users\Aneeshma\Desktop" alt="" className="topavatar" />
                    <span className="logo">Digi.Wallet</span>
                    </div>

                
                    <div className="topright">
                    <useState/>
                    
                    <div className="search">
                            <TextField id="outlined-basic" variant="outlined" fullWidth label="Search"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

