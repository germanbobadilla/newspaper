// class Book {
//   constructor(title, author, isbn) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//   }
// }
class Course {
  constructor(code, course, term, grade, total) {
    this.code = code;
    this.course = course;
    this.term = term;
    this.grade = grade;
    this.total = total;
  }
}
// class UI
class Table {
  // static displayBooks() {
  //   const books = Store.getBooks();

  //   books.forEach((book) => UI.addBookToList(book));
  // }
  static displayCourses() {
    const courses = StoredCourses.getCourses();
    courses.forEach((course) => Table.addCourseToList);
  }

  // static addBookToList(book) {
  //   const list = document.querySelector('#book-list');

  //   const row = document.createElement('tr');

  //   row.innerHTML = `
  //        <td>${book.title}</td>
  //        <td>${book.author}</td>
  //        <td>${book.isbn}</td>
  //        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
  //      `;

  //   list.appendChild(row);
  // }
  static addCourseToTable(course) {
    const list = document.querySelector('#courses');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>    
    `;
    list.appendChild(row);
  }

  // static deleteBook(el) {
  //   if (el.classList.contains('delete')) {
  //     el.parentElement.parentElement.remove();
  //   }
  // }

  static deleteCourse(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  // static showAlert(message, className) {
  //   const div = document.createElement('div');
  //   div.className = `alert alert-${className}`;
  //   div.appendChild(document.createTextNode(message));
  //   const container = document.querySelector('.container');
  //   const form = document.querySelector('#book-form');
  //   container.insertBefore(div, form);

  //   // Vanish in 3 seconds
  //   setTimeout(() => document.querySelector('.alert').remove(), 3000);
  // }

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

  // static clearFields() {
  //   document.querySelector('#title').value = '';
  //   document.querySelector('#author').value = '';
  //   document.querySelector('#isbn').value = '';
  // }

  static clearFields() {
    document.querySelector('#code').value = '';
    document.querySelector('#course').value = '';
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
    const courses = StoredCourses.getcourses();
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(courses));
  }

  static removeCourse(code) {
    const courses = StoredCourses.getcourses();

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
  const course = document.querySelector('#course').value;
  const term = document.querySelector('#term').value;
  const grade = document.querySelector('#grade').value;
  const total = document.querySelector('#total').value;

  // Validate
  if (
    code === '' ||
    course === '' ||
    term === '' ||
    grade === '' ||
    total === ''
  ) {
    Table.showAlert('Please fill in all fields', 'danger');
  } else {
    // Instatiate course
    const course = new Course(code, course, term, grade, total);

    // Add Course to Table
    Table.addCourseToTable(course);

    // Add book to store
    StoredCourses.addCourse(course);

    // Show success message
    Tabke.showAlert('Course Added', 'success');

    // Clear fields
    Table.clearFields();
  }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success message
  UI.showAlert('Book Removed', 'success');
});
