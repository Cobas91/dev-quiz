package de.neuefische.backend.service;

import de.neuefische.backend.model.Question;
import de.neuefische.backend.repo.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    private final QuestionRepo repo;

    @Autowired
    public QuestionService(QuestionRepo repo){
        this.repo = repo;
    }

    public List<Question> getAllQuestions(){
        return repo.getAllQuestions();
    }

    public List<Question> addQuestion(Question newQuestion){
        return repo.addQuestion(newQuestion);
    }
}
