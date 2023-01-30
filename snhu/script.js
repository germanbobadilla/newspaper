class Course {
  constructor(code, course, term, grade, total) {
    this.code = code;
    this.course = course;
    this.term = term;
    this.grade = grade;
    this.total = total;
  }
}

class Table {
  static displayCourses() {
    const courses = StoredCourses.getCourses();
    console.log(courses);
    courses.forEach((course) => Table.addCourseToList(course));
  }

  static addCourseToList(course) {
    const list = document.querySelector('#courses');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${course.code}</td>
    <td>${course.name}</td>
    <td>${course.term}</td>
    <td>${course.grade}</td>
    <td>${course.total}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>    
    `;
    list.appendChild(row);
  }

  static deleteCourse(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.form-wrapper');
    const form = document.querySelector('#course_form');
    container.insertBefore(div, form);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#code').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#term').value = '';
    document.querySelector('#grade').value = '';
    document.querySelector('#total').value = '';
  }
}

// Store Class: Handles Storage
class StoredCourses {
  static getCourses() {
    let courses;
    if (localStorage.getItem('courses') === null) {
      courses = [];
    } else {
      courses = JSON.parse(localStorage.getItem('courses'));
    }
    return courses;
  }

  static addCourse(course) {
    const courses = StoredCourses.getCourses();
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(courses));
  }

  static removeCourse(code) {
    const courses = StoredCourses.getCourses();
    courses.forEach((course, index) => {
      if (course.code === code) {
        courses.splice(index, 1);
      }
    });

    localStorage.setItem('courses', JSON.stringify(courses));
  }
}

// Event: Display Courses
document.addEventListener('DOMContentLoaded', Table.displayCourses);

// Event: Add a Course function
document.querySelector('#course_form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Get form values
  const code = document.querySelector('#code').value;
  const name = document.querySelector('#name').value;
  const term = document.querySelector('#term').value;
  const grade = document.querySelector('#grade').value;
  const total = document.querySelector('#total').value;

  // Validate
  if (
    code === '' ||
    name === '' ||
    term === '' ||
    grade === '' ||
    total === ''
  ) {
    Table.showAlert('Please fill in all fields', 'danger');
  } else {
    // Instatiate course
    const course = new Course(code, name, term, grade, total);

    // Add Course to Table
    Table.addCourseToList(course);

    // Add book to store
    StoredCourses.addCourse(course);

    // Show success message
    Table.showAlert('Course Added', 'success');

    // Clear fields
    Table.clearFields();
  }
});

// Event: Remove a Course
document.querySelector('#courses').addEventListener('click', (e) => {
  // Remove Course from UI
  Table.deleteCourse(e.target);

  // Remove Course from store
  StoredCourses.removeCourse(
    e.target.parentElement.previousElementSibling.textContent
  );

  // Show success message
  Table.showAlert('Course Removed', 'success');
});
