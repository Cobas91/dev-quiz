package de.neuefische.backend.controller;

import de.neuefische.backend.model.Question;
import de.neuefische.backend.service.QuestionService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QuestionController {
    QuestionService service;

    public QuestionController(QuestionService service){
        this.service = service;
    }
    @GetMapping("api/question")
    public List<Question> getAllQuestions(){
        return service.getAllQuestions();
    }
    @PostMapping("api/question")
    public List<Question> getAllQuestions(@RequestBody Question newQuestion){
        return service.addQuestion(newQuestion);
    }

}
