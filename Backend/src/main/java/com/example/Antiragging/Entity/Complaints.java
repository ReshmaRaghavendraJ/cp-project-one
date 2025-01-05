package com.example.Antiragging.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Complaints
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer complaintid;
    private String complaintcategory;
    private String victimsname;
    private String status;
    private String summary;
    private String accusedperson;

    public Complaints()
    {
    }

    public Complaints(Integer complaintid, String complaintcategory, String victimsname, String status, String summary, String accusedperson, Student student) {
        this.complaintid = complaintid;
        this.complaintcategory = complaintcategory;
        this.victimsname = victimsname;
        this.status = status;
        this.summary = summary;
        this.accusedperson = accusedperson;
        this.student = student;
    }

    public Integer getComplaintid() {
        return complaintid;
    }

    public void setComplaintid(Integer complaintid) {
        this.complaintid = complaintid;
    }

    public String getComplaintcategory() {
        return complaintcategory;
    }

    public void setComplaintcategory(String complaintcategory) {
        this.complaintcategory = complaintcategory;
    }

    public String getVictimsname() {
        return victimsname;
    }

    public void setVictimsname(String victimsname) {
        this.victimsname = victimsname;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getAccusedperson() {
        return accusedperson;
    }

    public void setAccusedperson(String accusedperson) {
        this.accusedperson = accusedperson;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    @ManyToOne
    @JoinColumn(name="studentid")
    private Student student;
}
