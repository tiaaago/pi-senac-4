package com.studybuddy.studybuddy_api.dto;

import lombok.Getter;

@Getter
public class PerfilDTO {
    private UserDTO user;
    private TagsDTO tags;
    private BadgesDTO badges;

    public PerfilDTO(UserDTO user, TagsDTO tags, BadgesDTO badges) {
        this.user = user;
        this.tags = tags;
        this.badges = badges;
    }
}