import Database from "../Database/index.js";
import model from "./model.js";

export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
 }
export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
} 

export function enrollUserInCourse(userId, courseId) {
  return model.create({ userId, courseId });
}

export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
 }