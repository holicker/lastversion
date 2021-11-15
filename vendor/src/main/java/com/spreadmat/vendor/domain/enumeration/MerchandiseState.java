package com.spreadmat.vendor.domain.enumeration;

public enum MerchandiseState {
    REGISTERD(0, "등록됨"),
    RESERVED(1, "예약됨"),
    SOLD(2, "판매됨"),
    DELETED(3, "삭제됨");

    private int id;
    private String title;
    MerchandiseState(int id, String title){
        this.id = id;
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }
}
