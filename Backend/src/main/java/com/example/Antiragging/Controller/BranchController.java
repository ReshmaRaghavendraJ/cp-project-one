package com.example.Antiragging.Controller;

import com.example.Antiragging.Entity.Branch;
import com.example.Antiragging.Entity.College;
import com.example.Antiragging.Entity.Course;
import com.example.Antiragging.Repository.BranchRepo;
import com.example.Antiragging.Repository.CollegeRepo;
import com.example.Antiragging.Repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class BranchController
{
    @Autowired
    BranchRepo branchRepo;

    @Autowired
    CourseRepo courseRepo;

    @Autowired
    CollegeRepo collegeRepo;


    /* post Branch Details */
    @PostMapping("/Addbranchdetails/{collegeid}/{courseid}")
    public ResponseEntity<?> Addbranchdetails(@PathVariable Integer collegeid,@PathVariable Integer courseid,@RequestBody Branch obj)
    {
        College colinfo=collegeRepo.findById(collegeid).orElseThrow(()->new RuntimeException("College id not found"));
        Course corinfo=courseRepo.findById(courseid).orElseThrow(()->new RuntimeException("Course id not found"));
        obj.setCollege1(colinfo);
        obj.setCourse(corinfo);
        if(branchRepo.existsByBranchname(obj.getBranchname()))
        {
            return new ResponseEntity<>("Branchname already exists",HttpStatus.CONFLICT);
        }
        branchRepo.save(obj);
        return new ResponseEntity<>("Branch details added Successfully", HttpStatus.OK);
    }

    /* Get All Branch Details */
    @GetMapping("/Getallbranchdetails")
    public ResponseEntity<?> Getallbranchdetails()
    {
        List<Branch> branchList=branchRepo.findAll();
        return new ResponseEntity<>(branchList,HttpStatus.OK);
    }
}
