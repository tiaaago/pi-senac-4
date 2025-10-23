package com.studybuddy.studybuddy_api.dto;

import com.studybuddy.studybuddy_api.models.Badges;
import lombok.Getter;

@Getter
public class BadgesDTO {
    private boolean bronze;
    private boolean prata;
    private boolean ouro;
    private boolean diamante;

    public BadgesDTO(Badges badge) {
        this.bronze = badge.isBronze();
        this.prata = badge.isPrata();
        this.ouro = badge.isOuro();
        this.diamante = badge.isDiamante();
    }
}