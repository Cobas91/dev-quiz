package de.neuefische.backend.repo;

import de.neuefische.backend.model.Question;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class QuestionRepo {

    private final Map<String, Question> repo = new HashMap<>();

    public List<Question> addQuestion(Question newQuestion){
        repo.put(newQuestion.getQuestionID(), newQuestion);
        return List.copyOf(repo.values());
    }

    public List<Question> getAllQuestions(){
        return List.copyOf(repo.values());
    }

}
