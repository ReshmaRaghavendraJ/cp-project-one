package com.example.Antiragging.Controller;

import com.example.Antiragging.Entity.Complaints;
import com.example.Antiragging.Entity.News;
import com.example.Antiragging.Repository.NewsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class NewsController
{
    @Autowired
    NewsRepo newsRepo;

    //Add News
    @PostMapping("/Addnews")
    public ResponseEntity<?> Addnews(@RequestBody News obj)
    {
        newsRepo.save(obj);
        return new ResponseEntity<>("News posted Successfully", HttpStatus.OK);
    }

    /* Get All News in front end (Principal dashboard and Squad Dashboard) */
    @GetMapping("/GetAllnews")
    public ResponseEntity<?> GetAllnews()
    {
        List<News> newsList=newsRepo.findAll();
        return new ResponseEntity<>(newsList,HttpStatus.OK);
    }

}
