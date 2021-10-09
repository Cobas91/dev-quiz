package de.neuefische.backend.model;

import lombok.Data;

import java.util.List;

@Data
public class Question {
    private String questionID;
    private String questionText;
    private List<Answer> answers;

    public Question(String questionID, String questionText, List<Answer> answers) {
        this.questionID = questionID;
        this.questionText = questionText;
        this.answers = answers;
    }

    public Question(String questionText, List<Answer> answers) {
        this.questionText = questionText;
        this.answers = answers;
    }

    public Question() {
    }
}
