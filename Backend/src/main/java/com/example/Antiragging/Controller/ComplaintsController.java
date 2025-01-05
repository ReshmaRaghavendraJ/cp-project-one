package com.example.Antiragging.Controller;

import com.example.Antiragging.Entity.Complaints;
import com.example.Antiragging.Entity.Feedback;
import com.example.Antiragging.Entity.Student;
import com.example.Antiragging.Repository.CollegeRepo;
import com.example.Antiragging.Repository.ComplaintsRepo;
import com.example.Antiragging.Repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class ComplaintsController {
    @Autowired
    ComplaintsRepo complaintsRepo;

    @Autowired
    StudentRepo studentRepo;

    @Autowired
    CollegeRepo collegeRepo;

    /* post Complaints Details */
    @PostMapping("/Addcomplaints/{studentid}")
    public ResponseEntity<?> Addcomplaints(@PathVariable Integer studentid, @RequestBody Complaints obj) {
        try {
            var stuinfo = studentRepo.findById(studentid).orElseThrow(() -> new RuntimeException("Studentid not found"));
            if (!stuinfo.getStudentname().equals(obj.getVictimsname())) {
                return new ResponseEntity<>("Student name does not match", HttpStatus.BAD_REQUEST);
            }
            obj.setStatus("Pending");
            obj.setStudent(stuinfo);
            complaintsRepo.save(obj);
            return new ResponseEntity<>("Student gave Complaint Successfully", HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("Student not found", HttpStatus.NOT_FOUND);
        }
    }

    /* Get Complaints Details based on studentid in front end Studentdashboard*/
    @GetMapping("/Getcomplaints/{studentid}")
    public ResponseEntity<?> Getallcomplaints(@PathVariable Integer studentid) {
        try {
            var studinfo = studentRepo.findById(studentid).orElseThrow(() -> new RuntimeException("Studentid not found"));
            List<Complaints> complaintslist = complaintsRepo.findByStudent(studinfo);
            System.out.println("Student ID: " + studentid);
            System.out.println("Complaints List Size: " + complaintslist.size());
            return new ResponseEntity<>(complaintslist, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("Student not found", HttpStatus.NOT_FOUND);
        }
    }

    /* Get Complaints in front end (Principal dashboard) */
    @GetMapping("/Getcomp/{collegeid}")
    public ResponseEntity<?> Getcomp(@PathVariable Integer collegeid) {
        List<Complaints> complist = complaintsRepo.findByStudent_College2_Collegeid(collegeid);
        if (complist.isEmpty()) {
            return new ResponseEntity<>("No complaints found for the given college ID", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(complist, HttpStatus.OK);
    }

    /* Get All Complaints in Front End (Admin Dashboard and Squad Dashboard) */
    @GetMapping("/Getallcomplaints")
    public ResponseEntity<?> Getallcomplaints() {
        List<Complaints> complist = complaintsRepo.findByStatus("Pending");
        return new ResponseEntity<>(complist, HttpStatus.OK);
    }

    /* Get All Complaints in Front End (Squad Dashboard-->Manage Complaints) */
    @GetMapping("/Getallcomp")
    public ResponseEntity<?> Getallcomp() {
        List<Complaints> complist = complaintsRepo.findAll();
        return new ResponseEntity<>(complist, HttpStatus.OK);
    }

    /* Add Summary -Manage Complaints */
    @PostMapping("/AddSummary")
    public ResponseEntity<?> AddSummary(@RequestBody Complaints obj) {
        Optional<Complaints> complaintOptional = complaintsRepo.findById(obj.getComplaintid());

        if (!complaintOptional.isPresent()) {
            return new ResponseEntity<>("Complaint id not found", HttpStatus.NOT_FOUND);
        }

        Complaints complaint = complaintOptional.get();

        if ("Solved".equals(complaint.getStatus())) {
            return new ResponseEntity<>("Student complaint already Solved", HttpStatus.BAD_REQUEST);
        } else {
            // Update the summary and status
            complaint.setSummary(obj.getSummary());
            complaint.setStatus("Solved");
            complaintsRepo.save(complaint);
            return new ResponseEntity<>("Summary Added Successfully", HttpStatus.OK);
        }
    }
}




