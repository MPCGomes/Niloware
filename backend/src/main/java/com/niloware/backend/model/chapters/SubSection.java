package com.niloware.backend.model.chapters;

import jakarta.persistence.Column;
import lombok.Data;

import java.util.List;

@Data
public class SubSection {
    private String title;
    private String prerequisites;
    private String content;

    @Column(nullable = true)
    private List<Points> points;
}
