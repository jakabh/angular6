package services;

import models.UserData;

public class UserDataDAO {
    private final UserData[] dummyData = {
            new UserData("janos", "abcd", "dummyimage"),
            new UserData("iancu", "cdef", "dumyimage")
    };
    public UserDataDAO() {

    }

    public UserData[] getAllUsers() {
        return dummyData;

    }

    public UserData getUserData(String username){
        for ( UserData d : dummyData ){
            if ( d.getUserName().equals(username)){
                return d;
            }
        };
        return null;
    }

}
