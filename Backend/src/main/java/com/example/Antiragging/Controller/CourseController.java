package com.example.Antiragging.Controller;

import com.example.Antiragging.Entity.College;
import com.example.Antiragging.Entity.Course;
import com.example.Antiragging.Repository.CollegeRepo;
import com.example.Antiragging.Repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CourseController
{
    @Autowired
    CourseRepo courseRepo;

    @Autowired
    CollegeRepo collegeRepo;

    /* post Course Details */
    @PostMapping("/AddCoursedetails/{collegeid}")
    public ResponseEntity<?> AddCoursedetails(@PathVariable Integer collegeid,@RequestBody Course obj)
    {
        College collinfo=collegeRepo.findById(collegeid).orElseThrow(()->new RuntimeException("College id not found"));
        obj.setCollege(collinfo);
        if(courseRepo.existsByCoursename(obj.getCoursename()))
        {
            return new ResponseEntity<>("Course already exists",HttpStatus.CONFLICT);
        }
        courseRepo.save(obj);
        return new ResponseEntity<>("Course details added Successfully", HttpStatus.OK);
    }

    /* Get All Course Details */
    @GetMapping("/Getallcoursedetails")
    public ResponseEntity<?> Getallcoursedetails()
    {
        List<Course> courseList=courseRepo.findAll();
        return new ResponseEntity<>(courseList,HttpStatus.OK);
    }
}
