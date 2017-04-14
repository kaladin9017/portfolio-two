import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

class Header extends Component {
  handleItemClick() {
      return
  }
  render() {
    return (
      <Menu icon="labeled" secondary inverted>
        <Menu.Menu position='right'>
          <a href="https://twitter.com/sanchoc15" target="_blank">
            <Menu.Item name='twitter' onClick={this.handleItemClick}>
              <Icon className="header-icons" name='twitter' />
              Twitter
            </Menu.Item>
          </a>
          <a href="github.com/kaladin9017" target="_blank">
            <Menu.Item name='github' onClick={this.handleItemClick}>
              <Icon className="header-icons" name='github' />
              GitHub
            </Menu.Item>
          </a>
          <a href="https://www.linkedin.com/in/christopher-sancho/" target="_blank">
            <Menu.Item name='linkedin square' onClick={this.handleItemClick}>
              <Icon className="header-icons" name='linkedin square' />
              LinkedIn
            </Menu.Item>
          </a>
          <a href="https://resume.creddle.io/resume/ei3voztuu8y" target="_blank">
            <Menu.Item name='student' onClick={this.handleItemClick}>
              <Icon className="header-icons" name='student' />
              Resume
            </Menu.Item>
          </a>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
