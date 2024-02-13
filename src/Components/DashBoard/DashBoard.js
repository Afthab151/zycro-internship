import React from 'react'
import { useState } from 'react';

import './DashBoard.css'
import { Link } from 'react-router-dom';
function DashBoard() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <div className='main_container3'>
      <div className="left_container">
        <div className='side_logo'>
          <img className='logo_img' src="/Images/logo.svg" alt="" />
        </div>
        <div className="side_container">
          <div className='first_part'>

            <div className='dash' >
              <div className='inside_dash'>

                <img className='home' src="/Images/home - filled.svg" alt="" />
                <label className='label_home'>Dashboard</label>
              </div>
            </div>
            <div className='contact'>

              <div className='inside_contact'>
                <img className='user' src="/Images/user-square.svg" alt="" />
                <label className='label_user'>Contacts</label>
                <img className='icon5' src="/Images/chevron-down.svg" alt="" onClick={toggleDropdown} />
              </div>
            </div>

            {showDropdown && (
              <div className='dropdown_content'>
                <div className='lists'>

                  <div className='inside_lists'>
                    <img className='list_filled' src="/Images/List-filled.svg" alt="" />
                    <label className='label_user'>Lists</label>

                  </div>
                </div>
                <div className='contents'>

                  <div className='inside_contents'>
                    <img className='chart_pie' src="/Images/chart-pie.svg" alt="" />
                    <label className='label_user'>Contents</label>

                  </div>
                </div>
              </div>
            )}

            <Link to="/products" className='a_link'>
              <div className="formz">
                <div className='inside_formz'>
                  <img className='for' src="/Images/Forms-2-rec.svg" alt="" />
                  <label className='label_formz'>Forms</label>
                </div>
              </div>
            </Link>
            <div className='landing_page'>
              <div className="inside_landing">
                <img className='file' src="/Images/file.svg" alt="" />
                <label className='label_file'>Landing Page</label>
              </div>
            </div>
            <div className="camp">
              <div className='inside_camp'>
                <img className='phone' src="/Images/Megaphone.svg" alt="" />
                <label className='label_phone'>Campaign</label>
              </div>
            </div>
          </div>
          <div className='second_part'>
            <div className="settings">
              <div className='inside_settings'>
                <img className='vector' src="/Images/Vector.svg" alt="" />
                <label className='label_vector'>Settings</label>
              </div>
            </div>
          </div>
        </div>
        <div className='side_profile'>
          <div className='all_profile'>
            <div className="avatar">
              <img src="/Images/box.svg" alt="" />
            </div>
            <div className="profile_name">
              <p className='profile_text'>
                Corey Bergson
              </p>
            </div>
            <div className='profile_icon'>
              <img src="/Images/chevron-right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="right_container">
        <div className="head">
          <h1 className='heading3'>Welcome to Zycro!</h1>
        </div>
        <div className="started_container">
          <div className="started">

            <p className='parad1'>Let's Get Started</p>
            <div className='all_content'>

              <div className='onboard'>
                <p className='parad3'>Onboarding checklist</p>
                <p className='parad6'>40% Completed</p>
              </div>
              <div className='content_started'>
                <div className="content">
                  <div className="inside_content1">
                    <img className='icond1' src="/Images/circle checkboxes.svg" alt="" />
                    <p className='parad4'>Complete Your Profile</p>
                    <img className='icond2' src="/Images/arrow-right.svg" alt="" />
                  </div>
                  <div className="inside_content2">
                    <img className='icond1' src="/Images/circle checkboxes.svg" alt="" />
                    <p className='parad4'>Confirm Your Sending Domain</p>
                    <img className='icond2' src="/Images/arrow-right.svg" alt="" />
                  </div>
                  <div className="inside_content3">
                    <img className='icond1' src="/Images/circle checkboxes (1).svg" alt="" />
                    <p className='parad5'>Setup your Brand Book</p>
                    <img className='icond2' src="/Images/arrow-right.svg" alt="" />
                  </div>
                  <div className="inside_content4">
                    <img className='icond1' src="/Images/circle checkboxes (1).svg" alt="" />
                    <p className='parad5'>Add or Import Contacts</p>
                    <img className='icond2' src="/Images/arrow-right.svg" alt="" />
                  </div>
                  <div className="inside_content5">
                    <img className='icond1' src="/Images/circle checkboxes (1).svg" alt="" />
                    <p className='parad5'>Create Your First Campaign</p>
                    <img className='icond2' src="/Images/arrow-right.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
