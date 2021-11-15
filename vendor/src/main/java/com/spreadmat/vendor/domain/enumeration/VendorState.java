package com.spreadmat.vendor.domain.enumeration;

public enum VendorState {
    OPEN(2, "가게열림"),
    READY(1, "가게준비"),
    CLOSED(0, "가게닫힘");

    private int id;
    private String title;

    VendorState(int id, String title) {
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
