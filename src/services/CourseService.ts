import axios from '../axios';
import { Course } from '../types';

const getAllCourses = () => axios.get<Course[]>(`${process.env.CLASS_SCHEDULE_SUBFOLDER}${process.env.COURSES_SUBFOLDER}`);

const CourseService = {
    getAllCourses,
};

export default CourseService;
