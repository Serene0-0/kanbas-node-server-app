import Database from "../Database/index.js";

export function findAllEnrollments() {
  return Database.enrollments;
}

export function findEnrollmentsForUser(userId) {
  return Database.enrollments.filter((enrollment) => enrollment.user === userId);
}

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function deleteEnrollment(userId, courseId) {
  Database.enrollments = Database.enrollments.filter(
    (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
  );
}