package com.niloware.backend.dto;

import lombok.Data;

import java.util.List;

@Data
public class ChapterDTO {
    private String id;
    private String game;
    private List<SectionDTO> chapters;

    @Data
    public static class SectionDTO {
        private String title;
        private List<SubsectionDTO> subsections;
    }

    @Data
    public static class SubsectionDTO {
        private String title;
        private String content;
    }
}
