import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
    app.get("/api/enrollments", (req, res) => {
        const enrollments = dao.findAllEnrollments();
        res.send(enrollments);
    });
    app.get("/api/enrollments/user/:userId", (req, res) => {
        const { userId } = req.params;
        const userEnrollments = dao.findEnrollmentsForUser(userId);
        res.send(userEnrollments);
    });
    app.delete("/api/enrollments/user/:userId/course/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        dao.deleteEnrollment(userId, courseId);
        res.sendStatus(204);
    });
    app.post("/api/enrollments/user/:userId/course/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        dao.enrollUserInCourse(userId, courseId);
        res.sendStatus(201);
    });
}