package com.example.Antiragging.Repository;

import com.example.Antiragging.Entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course,Integer>
{
    boolean existsByCoursename(String coursename);
}
