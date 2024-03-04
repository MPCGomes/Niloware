package com.niloware.backend.model;


import jakarta.persistence.Id;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "chapters")
public class Chapter {

    @Id
    private String id;
    private String game;
    private List<Section> chapters;

    @Data
    public static class Section {
        private String title;
        private List<Subsection> subsections;
    }

    @Data
    public static class Subsection {
        private String title;
        private String content;
    }

    @EqualsAndHashCode(callSuper = true)
    @Data
    public static class SkillSubsection extends Subsection {
        private List<Point> points;
    }

    @Data
    public static class Point {
        private int point;
        private List<String> benefits;
    }
}
