import React, { Component } from 'react'
import { Sidebar, Segment, Button } from 'semantic-ui-react'

class ProjectDisplay extends Component {
  render() {
    return (
      <Sidebar direction='right' animation='slide along' width='wide' visible={this.props.visible} icon='labeled' vertical>
        <Segment secondary>
          <div className="project-display">
            <center>
              <div className="project-top">
                <div>
                  <a href={this.props.project.link} target="_blank"><Button color="blue" size="medium" basic>Live</Button></a>
                  <a href={this.props.project.github} target="_blank"><Button color="blue" basic>Git</Button></a>
                </div>
              </div>
              <br/>
              <br/>
              <div className="project-middle">
                Description
              <br/>
                <h4>{this.props.project.description}</h4>
                <br/>
                Tech Stack
                <h5>{this.props.project.spec}</h5>
              </div>
              <br/>
              <br/>
              <h5>DEMO</h5>
              <img className="project-bottom" src={this.props.project.gif} alt=""/>
              <br/>
              <br/>
              <div><Button color="blue" size="medium" basic onClick={this.props.changeVisible}>Close</Button></div>
            </center>
          </div>
        </Segment>

      </Sidebar>
    )
  }
}

export default ProjectDisplay
