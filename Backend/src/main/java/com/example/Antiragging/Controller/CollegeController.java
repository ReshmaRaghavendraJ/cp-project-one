package com.example.Antiragging.Controller;

import com.example.Antiragging.Entity.College;
import com.example.Antiragging.Repository.CollegeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")

public class CollegeController
{
    @Autowired
    CollegeRepo collegeRepo;

    /* post College Details */
    @PostMapping("/AddCollegedetails")
    public ResponseEntity<?> AddCollegedetails(@RequestBody College obj)
    {
        if (collegeRepo.existsByCollegename(obj.getCollegename()))
        {
            return new ResponseEntity<>("College with this name already exists", HttpStatus.BAD_REQUEST);
        }
        collegeRepo.save(obj);
        return new ResponseEntity<>("College added Successfully", HttpStatus.OK);
    }

    /* Get All College Details */
    @GetMapping("/Getallcollegedetails")
    public ResponseEntity<?> Getallcollegedetails()
    {
        List<College> collegelist=collegeRepo.findAll();
        return new ResponseEntity<>(collegelist,HttpStatus.OK);
    }
}
