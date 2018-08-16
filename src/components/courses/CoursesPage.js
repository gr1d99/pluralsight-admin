import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  courseRow(course, index){
    return (
      <div key={index}>{course.title}</div>
    )
  }

  render (){
    return (
      <div>
        <h1>Courses</h1>
        <hr/>
        {this.props.courses.map(this.courseRow)}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return { courses: state.courses }
}

export default connect(mapStateToProps)(CoursesPage);
