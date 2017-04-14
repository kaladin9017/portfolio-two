import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Divider } from 'semantic-ui-react'
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
              <img src={project.image}  alt={project.name} className="project-image"/>
              <span className="thumb-span" onClick={this.handleSelect.bind(this, project)} >{project.name}</span>
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
      <div style={styles}>
        <ProjectDisplay project={this.props.selectedProject} visible={this.state.visible} changeVisible={this.toggleVisibility.bind(this)}/>
        <Divider/>
        <h2>Projects</h2>
        <Divider/>
        <Grid relaxed columns={3}>
          {this.renderProjects()}
        </Grid>
      </div>
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
