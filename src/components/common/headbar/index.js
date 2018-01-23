import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const HeadBar = () => (
  <div>
    <div className="logo"><b><i>Ape</i></b></div>
    <Menu
      mode="horizontal"
      style={{ lineHeight: '62px', backgroundColor: '#f3f3f3' }}
    >
      <Menu.Item key="1"><Link to="/">测试1</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/star">测试2</Link></Menu.Item>
      <Menu.Item key="3"><Link to="/addproject">测试3</Link></Menu.Item>
    </Menu>
  </div>
)

export default HeadBar;
