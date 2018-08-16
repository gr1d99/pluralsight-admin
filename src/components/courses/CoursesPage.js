import React, { PropTypes } from 'react';
import { connect } from "react-redux";

import * as courseActions from '../../actions/CourseActions';
import {createCourse} from "../../actions/CourseActions";

class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave(){
    this.props.dispatch(createCourse(this.state.course))
  }

  render (){
    return (
      <div>
        <h1>Courses</h1>
        <hr/>
        <h2>Add Course</h2>

        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.title}/>

        <input
          type="submit"
          value="save"
          onClick={this.onClickSave}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    state: state.courses
  };
}

export default connect(
  mapStateToProps
)(CoursesPage);
