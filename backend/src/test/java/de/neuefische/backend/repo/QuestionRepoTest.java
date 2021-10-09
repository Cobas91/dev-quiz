package de.neuefische.backend.repo;

import de.neuefische.backend.model.Answer;
import de.neuefische.backend.model.Question;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.*;

class QuestionRepoTest {
    QuestionRepo repo = new QuestionRepo();

    @BeforeEach
    void clearRepo(){
        repo.clear();
    }

    @Test
    void addQuestion() {
        //GIVEN
        Answer answer = new Answer("Ja!", true);
        Question toAdd = new Question("1","Funktioniert der Test?", List.of(answer));
        Question toAdd2 = new Question("2","Funktioniert der Test?", List.of(answer));
        //WHEN
        List<Question> actual = repo.addQuestion(toAdd);
        List<Question> actual2 = repo.addQuestion(toAdd2);
        //THEN

        assertThat(actual2, is(List.of(toAdd, toAdd2)));
        assertThat(repo.getAllQuestions().size(), is(2));
    }

}