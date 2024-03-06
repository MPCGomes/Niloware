package com.niloware.backend.model.chapters;

import lombok.Data;

import java.util.List;

@Data
public class Section {
    private String title;
    private String content;
    private List<SubSection> subsections;
}
