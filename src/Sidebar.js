import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';

function Sidebar() {
  const recentItem = (topic) =>(
    <div className='sidebar__recentItem'>
    <span className='sidebar__hash'>#</span>
    <p>{topic}</p>
    </div>
  );
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='https://images.unsplash.com/photo-1681649953900-b6fe394d5c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='' />
        <Avatar src='https://pbs.twimg.com/profile_images/1407321258103128064/NEgu9N-P_400x400.jpg' className='sidebar__avatar'/>
        <h2>Sam Khan</h2>
        <h4>samkhan@gmail.com</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
        <p>Who viewed you</p>
        <p className='sidebar__statNumber'>
        25,534
        </p>
        </div>
        <div className='sidebar__stat'>
        <p>Views on post</p>
        <p className='sidebar__statNumber'>
        25,534
        </p>
        </div>
      </div>
      <div className='sidebar__bottom'>
      <p>Recent</p>
      {recentItem('reactjs')}
      {recentItem('programming')}
      {recentItem('softwareengineering')}
      {recentItem('design')}
      {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar;
