export class Course {
  constructor(code, name, term, grade, total) {
    this.code = code;
    this.name = name;
    this.term = term;
    this.grade = grade;
    this.total = total;
  }
}

export class Table {
  static displayCourses() {
    const courses = StoredCourses.getCourses();
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
export class StoredCourses {
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
