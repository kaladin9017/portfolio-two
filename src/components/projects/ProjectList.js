import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Header } from 'semantic-ui-react'
import * as actions from '../../redux/actions';
import ProjectDisplay from './ProjectDisplay';

import './styles/projects.css'
class ProjectList extends Component {
  state = { visible: false }
  handleSelect(project) {
    this.props.selectProject(project);
    this.toggleVisibility();
  }
  renderProjects() {
    return (
      this.props.projects.map(project => (
          <div className="thumb" key={project.name}>
            <a>
              <img src={project.image}  />
              <span onClick={this.handleSelect.bind(this, project)} >{project.name}</span>
            </a>
          </div>
      )
    )
  );
  }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  render() {
    const styles = {
      "paddingTop": "8px"
    }
    return (
      <center style={styles}>
        <ProjectDisplay project={this.props.selectedProject} visible={this.state.visible} changeVisible={this.toggleVisibility.bind(this)}/>
        <h2>Projects</h2>
        <Grid relaxed columns={3}>
          {this.renderProjects()}
        </Grid>
      </center>
    )
  }
}
function mapStateToProps(state) {
  return {
    projects: state.projects,
    selectedProject: state.selectedProject.selected
  }
}
export default connect(mapStateToProps, actions)(ProjectList)
