import { Course, Table, StoredCourses } from './classes/classes.js';

// Event: Display Courses
document.addEventListener('DOMContentLoaded', Table.displayCourses);

const tds = document.getElementsByTagName('td');
console.log(tds);

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

    // Add course to store
    StoredCourses.addCourse(course);

    // Show success message
    Table.showAlert('Course Added', 'success');

    // Clear fields
    Table.clearFields();

    sumTotal();
  }
});

// Event: Remove a Course
document.querySelector('#courses').addEventListener('click', (e) => {
  // Remove Course from Table
  Table.deleteCourse(e.target);

  // Remove Course from store
  StoredCourses.removeCourse(
    e.target.parentElement.previousElementSibling.previousElementSibling
      .previousElementSibling.previousElementSibling.previousElementSibling
      .textContent
  );

  // Show success message
  Table.showAlert('Course Removed', 'success');
  console.log(sumTotals());
});

// function sumTotals() {
//   const courses = StoredCourses.getCourses();
//   const totalTerm = courses.totals;
//   console.log(totalTerm);
//   // const tds = [...document.querySelectorAll('.totals')].reduce((totals, td) => {
//   //   return parseFloat(td.textContent) + totals;
//   // }, 0);
//   // return tds;
// }

// console.log(sumTotals());
